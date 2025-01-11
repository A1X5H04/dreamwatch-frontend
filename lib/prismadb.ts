import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client/web";
import { PrismaClient } from "@prisma/client";

// CREDIT: https://github.com/North-Hess/StickyNotes/blob/main/src/app/server/db.ts

function primsaClientSingleton() {
  const libSqlClient = createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_DATABASE_TOKEN!,
  });

  const libSQLAdapter = new PrismaLibSQL(libSqlClient);

  return new PrismaClient({ adapter: libSQLAdapter });
}

const globalPrisma = globalThis as unknown as {
  prisma: undefined | ReturnType<typeof primsaClientSingleton>;
};

const prismadb = globalPrisma.prisma ?? primsaClientSingleton();

if (process.env.NODE_ENV !== "production") globalPrisma.prisma = prismadb;

export default prismadb;
