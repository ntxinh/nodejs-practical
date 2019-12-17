# HOW TO RUN

- Create & Config `.env`
- Run command:
```bash
npm start
```

# API

```bash
curl -X POST \
  http://localhost:3000/auth/register \
  -H 'content-type: application/json' \
  -d '{
	"firstName": "Norman",
	"lastName": "Black",
	"email": "xinh@yopmail.com",
	"password": "123456"
}'

curl -X POST \
  http://localhost:3000/auth/login \
  -H 'content-type: application/json' \
  -d '{
	"email": "xinh@yopmail.com",
	"password": "123456"
}'

curl -X GET \
  http://localhost:3000/user/profile \
  -H 'authorization: Bearer YOUR_TOKEN' \
```