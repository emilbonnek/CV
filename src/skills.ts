import imageReferenceAngular from "./images/logos-tech/logo-tech-ANGU.png";
import imageReferenceCss from "./images/logos-tech/logo-tech-CSS3.png";
import imageReferenceDeno from "./images/logos-tech/logo-tech-DENO.png";
import imageReferenceDocker from "./images/logos-tech/logo-tech-DOCK.png";
import imageReferenceGoogleCloud from "./images/logos-tech/logo-tech-GCLO.png";
import imageReferenceHtml from "./images/logos-tech/logo-tech-HTML.png";
import imageReferenceJavascript from "./images/logos-tech/logo-tech-JAVS.png";
import imageReferenceLit from "./images/logos-tech/logo-tech-LITD.png";
import imageReferenceNext from "./images/logos-tech/logo-tech-NEXT.png";
import imageReferenceNode from "./images/logos-tech/logo-tech-NODE.png";
import imageReferencePulumi from "./images/logos-tech/logo-tech-PULU.png";
import imageReferencePython from "./images/logos-tech/logo-tech-PYTH.png";
import imageReferenceReact from "./images/logos-tech/logo-tech-REAC.png";
import imageReferenceRuby from "./images/logos-tech/logo-tech-RUBY.png";
import imageReferenceRust from "./images/logos-tech/logo-tech-RUST.png";
import imageReferenceSolid from "./images/logos-tech/logo-tech-SOLI.png";
import imageReferenceTerraform from "./images/logos-tech/logo-tech-TERF.png";
import imageReferenceTrpc from "./images/logos-tech/logo-tech-TRPC.png";
import imageReferenceTypescript from "./images/logos-tech/logo-tech-TYPE.png";
import imageReferenceWebassembly from "./images/logos-tech/logo-tech-WASM.png";

type Skill = {
  title: string;
  logo: ImageMetadata;
  url: string | undefined;
};

const SKILL_ANGULAR = {
  title: "Angular",
  logo: imageReferenceAngular,
  url: "https://angular.io",
} as const satisfies Skill;
const SKILL_CSS = {
  title: "CSS",
  logo: imageReferenceCss,
  url: undefined,
} as const satisfies Skill;
const SKILL_DENO = {
  title: "Deno",
  logo: imageReferenceDeno,
  url: "https://deno.com",
} as const satisfies Skill;
const SKILL_DOCKER = {
  title: "Docker",
  logo: imageReferenceDocker,
  url: "https://www.docker.com",
} as const satisfies Skill;
const SKILL_GOOGLE_CLOUD = {
  title: "Google Cloud",
  logo: imageReferenceGoogleCloud,
  url: "https://cloud.google.com",
} as const satisfies Skill;
const SKILL_HTML = {
  title: "HTML",
  logo: imageReferenceHtml,
  url: undefined,
} as const satisfies Skill;
const SKILL_JAVASCRIPT = {
  title: "JavaScript",
  logo: imageReferenceJavascript,
  url: "https://www.javascript.com",
} as const satisfies Skill;
const SKILL_LIT = {
  title: "Lit",
  logo: imageReferenceLit,
  url: "https://lit.dev",
} as const satisfies Skill;
const SKILL_NEXT = {
  title: "Next.js",
  logo: imageReferenceNext,
  url: "https://nextjs.org",
} as const satisfies Skill;
const SKILL_NODE = {
  title: "Node.js",
  logo: imageReferenceNode,
  url: "https://nodejs.org",
} as const satisfies Skill;
const SKILL_PULUMI = {
  title: "Pulumi",
  logo: imageReferencePulumi,
  url: "https://www.pulumi.com",
} as const satisfies Skill;
const SKILL_PYTHON = {
  title: "Python",
  logo: imageReferencePython,
  url: "https://www.python.org",
} as const satisfies Skill;
const SKILL_REACT = {
  title: "React",
  logo: imageReferenceReact,
  url: "https://reactjs.org",
} as const satisfies Skill;
const SKILL_RUBY = {
  title: "Ruby",
  logo: imageReferenceRuby,
  url: "https://www.ruby-lang.org",
} as const satisfies Skill;
const SKILL_RUST = {
  title: "Rust",
  logo: imageReferenceRust,
  url: "https://www.rust-lang.org",
} as const satisfies Skill;
const SKILL_SOLID = {
  title: "Solid",
  logo: imageReferenceSolid,
  url: "https://www.solidjs.com",
} as const satisfies Skill;
const SKILL_TERRAFORM = {
  title: "Terraform",
  logo: imageReferenceTerraform,
  url: "https://www.terraform.io",
} as const satisfies Skill;
const SKILL_TRPC = {
  title: "TRPC",
  logo: imageReferenceTrpc,
  url: "https://trpc.io",
} as const satisfies Skill;
const SKILL_TYPESCRIPT = {
  title: "TypeScript",
  logo: imageReferenceTypescript,
  url: "https://www.typescriptlang.org",
} as const satisfies Skill;
const SKILL_WEBASSEMBLY = {
  title: "WebAssembly",
  logo: imageReferenceWebassembly,
  url: "https://webassembly.org",
} as const satisfies Skill;

export const SKILLS = [
  SKILL_ANGULAR,
  SKILL_CSS,
  SKILL_DENO,
  SKILL_DOCKER,
  SKILL_GOOGLE_CLOUD,
  SKILL_HTML,
  SKILL_JAVASCRIPT,
  SKILL_LIT,
  SKILL_NEXT,
  SKILL_NODE,
  SKILL_PULUMI,
];
