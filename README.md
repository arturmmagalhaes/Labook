# Labook

Projeto de backend para uma rede social Labook.

# Endpoints
- POST (http://localhost:3000/user/signup) -> Cadastrar Usuários
- POST (http://localhost:3000/user/signin) -> Login dos Usuários
- POST (http://localhost:3000/friend/follow) -> usuário seguir o outro
- POST (http://localhost:3000/friend/unfollow) -> Usuário deixar de seguir o outro
- GET  (http://localhost:3000/post/feed) -> Retorna os posts do feed
- GET  (http://localhost:3000/post/type?type=admin) Retorna os posts com tipo admin
- GET  (http://localhost:3000/post/type?type=normal) Retorna os posts com tipo normal

# Tecnologias
- Typescript
- knex
- express
- uuid
- bcrypt
- jsonwebtoken
