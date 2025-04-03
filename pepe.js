import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: "db-2good2eat.cb00q08gup8v.eu-north-1.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "2good2eat7945",
});

connection.connect((err) => {
  if (err) {
    console.error("Error de conexión:", err);
  } else {
    console.log("Conectado exitosamente a MySQL");
  }
  connection.end();
});
