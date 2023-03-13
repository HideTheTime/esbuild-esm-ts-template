// @/src/server.ts
import fastify, {
  FastifyRequest,
  FastifyReply,
  FastifyInstance,
} from "fastify";

const startServer = async (): Promise<FastifyInstance> =>
{
  const app = fastify();

  app.get("/", async (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> =>
  {
    return reply.send({ hello: "wor2221l2d22223221" });
  });

  return app;
};

startServer()
  .then((app) => app.listen(3333))
  .catch(console.error);

export * from './test'