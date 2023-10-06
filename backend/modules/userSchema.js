const { Entity, Schema ,Repository } = require("redis-om");
const { client } = require("./redis");
class User extends Entity {}

/* create a Schema for User */
const personSchema = new Schema(User, {
  userName: { type: "string" },
  socket_id: { type: "string" },
  isActive: { type: "boolean", default: true },
});
await songRepository.createIndex();
exports.userRepository = client.fetchRepository(personSchema);