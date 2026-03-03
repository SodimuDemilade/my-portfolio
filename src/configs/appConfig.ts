export type AppConfig = {
    baseUrlDev: string;
    baseUrlProd: string;
    stage: "Dev" | "Prod",
}
export const appConfig: AppConfig = {
    baseUrlDev: 'https://tqfe-develop.herokuapp.com',
    baseUrlProd: 'http://localhost:8080',
    stage: "Dev",
}
