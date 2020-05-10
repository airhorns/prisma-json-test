# Migration `20200510163628`

This migration has been generated by Harry Brundage at 5/10/2020, 4:36:28 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Post" (
"content" text   ,"id" SERIAL,"metafields" jsonb   ,"title" text  NOT NULL ,
    PRIMARY KEY ("id"))
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200510163628
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,15 @@
+datasource db {
+  provider = "postgresql"
+  url      = "postgres://example:example@localhost:5432/example"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Post {
+  id         Int     @default(autoincrement()) @id
+  title      String
+  content    String?
+  metafields Json?
+}
```

