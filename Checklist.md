### Passo a passo ###

- Inicializar um projeto em branco - vazio
```
    npx create-next-app --empty
```
- Instalar o ShadCN - [Dúvidas](https://ui.shadcn.com/docs/installation)
```
    npx shadcn@latest init
```
- Instalar o Prisma como dependência de desenvolvimento - [Dúvidas](https://prisma.io)
```
    npm install prisma -D
```
- Configurar o Prisma para utilizar o SQLite
```
    npx prisma init --datasource-provider sqlite
```
- Atualizar a Model <> Database
```
    npx prisma db push
```
- Instalar o Better-Auth - [Dúvidas](https://www.better-auth.com/docs/installation)
```
    npm install better-auth
```
- Configurar o .env com os seguintes parametros:
  - DATABASE_URL="file:./dev.db"
  - BETTER_AUTH_SECRET=
  - BETTER_AUTH_URL=http://localhost:3000
  - NEXT_PUBLIC_API_URL=http://localhost:3000
 
- Configurar os Adapters de conexão
- Criar as tabelas do Better-Auth
```
    npx @better-auth/cli generate
```

