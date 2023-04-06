import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 25,
  duration: "30s",
  rps: 0,
};

export default function () {
  const response = http.get("http://localhost:3000/");
  check(response, { "status is 200": (r) => r.status === 200 });
  //sleep(1);
}