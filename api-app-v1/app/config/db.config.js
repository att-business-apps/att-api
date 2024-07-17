module.exports = {
  HOST: "att-cluster1-5446.7s5.aws-ap-south-1.cockroachlabs.cloud:26257",
  USER: "developer_amortreetech",
  PASSWORD: "SB9lkwk8RAACdEDJl34l-g",
  DB: "defaultdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

//postgresql://developer_amortreetech:SB9lkwk8RAACdEDJl34l-g@att-cluster1-5446.7s5.aws-ap-south-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full
