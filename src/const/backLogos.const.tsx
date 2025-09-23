import netcoreLogo from "../assets/backend/netcore.svg";
import laravelLogo from "../assets/backend/laravel.svg";
import mysqlLogo from "../assets/backend/mysql.svg";
import mongoLogo from "../assets/backend/mongodb.svg";
import postgresLogo from "../assets/backend/postgre.svg";
import redisLogo from "../assets/backend/redis.svg";
import sqlServerLogo from "../assets/backend/sqlserver.svg";
import supabaseLogo from "../assets/backend/supabase.svg";

export interface IBackLogoItem {
  name: string;
  src: string;
  alt: string;
}

export const backendLogos: IBackLogoItem[] = [
  { name: ".Net Core", src: netcoreLogo, alt: "Logo de .Node Core" },
  { name: "Laravel", src: laravelLogo, alt: "logo de Laravel" },

  { name: "Postgresql", src: postgresLogo, alt: "Logo de postgresql" },

  { name: "MySql", src: mysqlLogo, alt: "Logo de MySql" },

  { name: "Sql Server", src: sqlServerLogo, alt: "Logo de Sql Server" },

  // { name: "MongoDB", src: mongoLogo, alt: "Logo de MongoDB" },

  { name: "Redis", src: redisLogo, alt: "Logo de Redis" },
  { name: "Supabase", src: supabaseLogo, alt: "Logo de Supabase" },
];
