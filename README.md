# Labook

Projeto de backend para uma rede social Labook.

# Endpoints
- POST (/user/signup) -> Cadastrar Usuários
- POST (/user/signin) -> Login dos Usuários
- POST (/friend/follow) -> usuário seguir o outro
- POST (/friend/unfollow) -> Usuário deixar de seguir o outro
- GET  (/post/feed) -> Retorna os posts do feed
- GET  (/post/type?type=admin) Retorna os posts com tipo admin
- GET  (/post/type?type=normal) Retorna os posts com tipo normal

# Tecnologias
- Typescript
- knex
- express
- uuid
- bcrypt
- jsonwebtoken
