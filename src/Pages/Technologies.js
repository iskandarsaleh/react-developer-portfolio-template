import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    sonarqube,
    bitbucket,
    js,
    confluence,
    jenkins,
    jira,
    k8s,
    argocd,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={sonarqube} title="Sonarqube" alt="" />
        <img src={bitbucket} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={confluence} title="Confluence" alt="" />
        <img src={jenkins} title="Jenkins" alt="" />
        <img src={jira} title="Jira" alt="" />
        <img src={k8s} title="K8s" alt="" />
        <img src={argocd} title="ArgoCD" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
