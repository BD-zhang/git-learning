/**
 * 创建indexedDB
*/ 
const DB:any = window.indexedDB
const db = DB.open('gitDataBase')

console.log('db', db)

export default db