/*
TODO: 
Home Page, Team Page, Events Page, Blogs Page, Contact Page, Web Team Page, App Team Page, ...

* 404 Page Done
*/

import HomeContainer from "@/containers/HomeContainer";
import Header from "../components/Header";
import HomeTeam from "@/containers/HomeTeam";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeTeam />
      <HomeContainer />
    </main>
  );
}
