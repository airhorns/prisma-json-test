import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  // works
  await prisma.post.create({
    data: {
      title: "A post",
      content: "stuff",
      metafields: { foo: "bar" },
    },
  });

  console.log(await prisma.post.findMany());
};

main();
