
# Citadel Paints API

API to access basic information about paints in the Citadel range

I'll do my best to keep the data updated with the current paint range, but please use a Github issue to let me know if there are any missing.

URI: https://citadel-paints-api.onrender.com/paints

Results are returned as an array of paint objects. Example of paint object:

```json
{
    "_id": "63ea823b30b5f2d4d900caf0",
    "name": "Runelord Brass ",
    "type": "layer",
    "colorGroup": "metallic",
    "__v": 0
}
```

## API Reference

View full documentation with examples [here](https://documenter.getpostman.com/view/25853651/2s93CPpWv4).

#### Get all paints

```http
  GET /paints
```

#### Get paint by id

```http
  GET /paints/${id}
```

#### GET paints by name

```http
  GET /paints?name=[name]
```

#### GET paints by type

```http
  GET /paints?type=[type]
```

#### GET paints by color group

```http
  GET /paint?colorGroup=[colorGroup]
```

#### GET paints by type and color group

```http
  GET /paints?type=[type]&colorGroup=[colorGroup]
```



## Acknowledgements

- [How to set up TypeScript with Node.js and Express](https://blog.logrocket.com/how-to-set-up-node-typescript-express/)
- [Tool to convert spreadsheet data to array](https://www.seabreezecomputers.com/excel2array/)
- [Net Ninja Node.js Crash Course Tutorial #9 - MongoDB](https://www.youtube.com/watch?v=bxsemcrY4gQ)
- [How to Connect MongoDB to Node.js Using Mongoose](https://www.section.io/engineering-education/nodejs-mongoosejs-mongodb/)
- [Mongoose docs: find methods](https://mongoosejs.com/docs/api.html#model_Model-find)

