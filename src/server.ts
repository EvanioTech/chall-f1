import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
  origin: '8' //["http://localhost:3000"],
});

const teams = [
  { id: 1, name: "Mclaren", base: "Woking, Surrey, England" },
  { id: 2, name: "Scuderia Ferrari", base: "Maranello, Italy" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, England" },
  { id: 4, name: "Mercedes", base: "Brackley, England" },
  { id: 5, name: "Aston Martin", base: "Silverstone, England" },
  { id: 6, name: "Alpine", base: "Enstone, England" },
  { id: 7, name: "Alpha Tauri", base: "Faenza, Italy" },
  { id: 8, name: "Alfa Romeo", base: "Hinwil, Switzerland" },
  { id: 9, name: "Haas", base: "Kannapolis, North Carolina, USA" },
  { id: 10, name: "Williams", base: "Grove, Oxfordshire, England" },
];

const drivers = [
  {id: 1, name: 'lewis hamilton', team: 'Red Bull'},
         {id: 2, name: 'max verstappen', team: 'Scuderia Ferrari'},
         {id: 3, name: 'sebastian vettel', team: 'Aston Martin'},
         {id: 4, name: 'fernando alonso', team: 'Alpine'},
         {id: 5, name: 'daniel ricciardo', team: 'Mclaren'},
         {id: 6, name: 'sergio perez', team: 'Red Bull'},
         {id: 7, name: 'carlos sainz', team: 'Scuderia Ferrari'},
         {id: 8, name: 'charles leclerc', team: 'Scuderia Ferrari'},
         {id: 9, name: 'landon norris', team: 'Mclaren'},
         {id: 10, name: 'valtteri bottas', team: 'Mercedes'},
         {id: 11, name: 'pierre gasly', team: 'Alpha Tauri'},
         {id: 12, name: 'esteban ocon', team: 'Alpine'},
         {id: 13, name: 'kimmi raikkonen', team: 'Alfa Romeo'},
         {id: 14, name: 'antonio giovinazzi', team: 'Alfa Romeo'},
         {id: 15, name: 'mick schumacher', team: 'Haas'},
         {id: 16, name: 'nikita mazepin', team: 'Haas'},
         {id: 17, name: 'george russell', team: 'Williams'},
         {id: 18, name: 'nicholas latifi', team: 'Williams'},
];
 


server.get("/teams", async (req, res) => {
  res.type("application/json").code(200);
  return { teams };
});

server.get('/drivers', async (req, res) => {
    res.type('application/json').code(200);
    

         return {drivers};
});
interface DriverParams {
    id: string;
}

server.get<{Params: DriverParams}>('/drivers/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const driver = drivers.find((d) => d.id === id);

    if (!driver) {
        res.type('application/json').code(404);
        return { message: 'Driver not found' };
    }else{
        res.type('application/json').code(200);
        return driver;
    }
});



server.listen({port: 3000}, () => {
  console.log(`Server init`);
});
  