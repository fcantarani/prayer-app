### Passo a passo ###

- Inicializar um projeto em branco - vazio
```
    npx create-next-app --empty
```
- Instalar o ShadCN
```
    npx shadcn@latest init
```
- Instalar os Componentes do ShadCN
```
    npx shadcn@latest add button label input sonner
```
- Instalar o Prisma como dependência de desenvolvimento
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
Instalar o Better-Auth
```
    npm install better-auth
```

