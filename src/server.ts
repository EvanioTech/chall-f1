import fastify from "fastify";

const server = fastify({ logger: true });


server.get("/teams", async (req, res) => {
  res.type("application/json").code(200);
  return { teams: ["team1", "team2", "team3"] };
});

server.listen({port: 3000}, () => {
  console.log(`Server init`);
});
  