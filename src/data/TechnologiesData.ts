import { type Technology, TechnologyType } from "@/models/Experiences";
import { groupItemsBy } from "@/lib/SplitByEnum";

import androidUrl from "@/assets/img/android.webp";
import angularUrl from "@/assets/img/angular.webp";
import bootstrapUrl from "@/assets/img/bootstrap.webp";
import dartUrl from "@/assets/img/dart.webp";
import debianUrl from "@/assets/img/debian.webp";
import djangoUrl from "@/assets/img/django.webp";
import dockerUrl from "@/assets/img/docker.webp";
import electronUrl from "@/assets/img/electron.webp";
import flutterUrl from "@/assets/img/flutter.webp";
import gitUrl from "@/assets/img/git.webp";
import javaUrl from "@/assets/img/java.webp";
import javaScriptUrl from "@/assets/img/js.webp";
import mysqlUrl from "@/assets/img/mysql.webp";
import nodeUrl from "@/assets/img/node.webp";
import odooUrl from "@/assets/img/odoo.webp";
import phpUrl from "@/assets/img/php.webp";
import postgresqlUrl from "@/assets/img/postgresql.webp";
import pythonUrl from "@/assets/img/python.webp";
import redisUrl from "@/assets/img/redis.webp";
import rubyOnRailsUrl from "@/assets/img/ruby-on-rails.webp";
import rubyUrl from "@/assets/img/ruby.webp";
import symfonyUrl from "@/assets/img/symfony.webp";
import springUrl from '@/assets/img/spring.webp';
import tailwindCssUrl from "@/assets/img/tailwindcss.webp";
import typeScriptUrl from "@/assets/img/typescript.webp";
import vueJsUrl from "@/assets/img/vue-js.webp";

// Languages 
const python: Technology = {
    name: "python",
    label: "Python",
    knowledge: 1,
    website: "https://www.python.org/",
    imageUrl: pythonUrl,
    type: TechnologyType.Language,
}

const php: Technology = {
    name: "php",
    label: "PHP",
    knowledge: 0.8,
    website: "https://www.php.net/",
    imageUrl: phpUrl,
    type: TechnologyType.Language,
}

const js: Technology = {
    name: "javascript",
    label: "JavaScript",
    knowledge: 0.7,
    website: "https://www.javascript.com/",
    imageUrl: javaScriptUrl,
    type: TechnologyType.Language,
}

const ruby: Technology = {
    name: "ruby",
    label: "Ruby",
    knowledge: 0.1,
    website: "https://www.ruby-lang.org/en/",
    imageUrl: rubyUrl,
    type: TechnologyType.Language,
}

const java: Technology = {
    name: "java",
    label: "Java",
    knowledge: 0.5,
    website: "https://www.java.com/en/",
    imageUrl: javaUrl,
    type: TechnologyType.Language,
}

const dart: Technology = {
    name: "dart",
    label: "Dart",
    knowledge: 0.6,
    website: "https://dart.dev",
    imageUrl: dartUrl,
    type: TechnologyType.Language,
}



// Frameworks
const django: Technology = {
    name: "django",
    label: "Django",
    knowledge: 0.5,
    website: "https://www.djangoproject.com/",
    imageUrl: djangoUrl,
    type: TechnologyType.BackEndFramework,
}

const symfony: Technology = {
    name: "symfony",
    label: "Symfony",
    knowledge: 0.5,
    website: "https://www.symfony.com/",
    imageUrl: symfonyUrl,
    type: TechnologyType.BackEndFramework,
}

const vue: Technology = {
    name: "vue",
    label: "Vue",
    knowledge: 0.6,
    website: "https://www.vuejs.org/",
    imageUrl: vueJsUrl,
    type: TechnologyType.FrontEndFramework,
}

const springBoot: Technology = {
    name: "springboot",
    label: "SpringBoot",
    knowledge: 0.4,
    website: "https://spring.io/",
    imageUrl: springUrl,
    type: TechnologyType.BackEndFramework,
}

const rubyOnRails: Technology = {
    name: "rubyonrails",
    label: "Ruby on Rails",
    knowledge: 0.1,
    website: "https://rubyonrails.org/",
    imageUrl: rubyOnRailsUrl,
    type: TechnologyType.BackEndFramework,
}

const flutter: Technology = {
    name: "flutter",
    label: "Flutter",
    knowledge: 0.3,
    website: "https://flutter.dev",
    imageUrl: flutterUrl,
    type: TechnologyType.Mobile,
}

const android: Technology = {
    name: "android",
    label: "Android",
    knowledge: 0.2,
    website: "https://www.android.com",
    imageUrl: androidUrl,
    type: TechnologyType.Mobile,
}

const nodeJS: Technology = {
    name: "nodejs",
    label: "Node.js",
    knowledge: 0.3,
    website: "",
    imageUrl: nodeUrl,
    type: TechnologyType.BackEndFramework,
}

const angular: Technology = {
    name: "angular",
    label: "Angular",
    knowledge: 0.3,
    website: "",
    imageUrl: angularUrl,
    type: TechnologyType.FrontEndFramework,
}

const electron: Technology = {
    name: "electron",
    label: "Electron",
    knowledge: 0.2,
    website: "",
    imageUrl: electronUrl,
    type: TechnologyType.Others,
}

// Database

const mysql: Technology = {
    name: "mysql",
    label: "MySQL",
    knowledge: 0.7,
    website: "https://www.mysql.com/",
    imageUrl: mysqlUrl,
    type: TechnologyType.Database,
}

const postgresql: Technology = {
    name: "postgresql",
    label: 'PostgreSQL',
    knowledge: 0.7,
    website: "https://www.postgresql.org/",
    imageUrl: postgresqlUrl,
    type: TechnologyType.Database,

}

const redis: Technology = {
    name: "redis",
    label: "Redis",
    knowledge: 0.3,
    website: "https://redis.io/",
    imageUrl: redisUrl,
    type: TechnologyType.Database,

}

// DevOps, others
const docker: Technology = {
    name: "docker",
    label: "Docker",
    knowledge: 0.7,
    website: "https://www.docker.com/",
    imageUrl: dockerUrl,
    type: TechnologyType.DevOps,

}

const debian: Technology = {
    name: "debian",
    label: "Debian",
    knowledge: 0.8,
    website: "https://www.debian.org",
    imageUrl: debianUrl,
    type: TechnologyType.DevOps,

}

const git: Technology = {
    name: "git",
    label: "Git",
    knowledge: 0.9,
    website: "https://git-scm.com",
    imageUrl: gitUrl,
    type: TechnologyType.Others,

}


// CMS/ERP
const odoo: Technology = {
    name: "odoo",
    label: "Odoo",
    knowledge: 1,
    website: "https://www.odoo.com/fr_FR",
    imageUrl: odooUrl,
    type: TechnologyType.ERP,

}

// Libraries

const bootstrap: Technology = {
    name: "bootstrap",
    label: "Bootstrap",
    knowledge: 1,
    website: "",
    imageUrl: bootstrapUrl,
    type: TechnologyType.Library,

}

const tailWindCSS: Technology = {
    name: "tailwindcss",
    label: "TailwindCSS",
    knowledge: 0.8,
    website: "",
    imageUrl: tailwindCssUrl,
    type: TechnologyType.Library,

}

const allTechnologies: Array<Technology> = [python, php, js, ruby, java, dart, django, symfony, vue, springBoot, rubyOnRails, flutter, android, mysql, postgresql, redis, docker, debian, git, odoo, bootstrap, tailWindCSS, nodeJS, angular, electron]

const findTechnologyByName = (name: String): Technology | undefined => allTechnologies.find(item => item.name.toLowerCase() == name.toLowerCase());


const { lang, backend, frontend, others, mobile, devops, database, libraries, erp } = groupItemsBy<Technology, TechnologyType>(allTechnologies, 'type', TechnologyType);

export { python, php, js, ruby, java, dart, django, symfony, vue, springBoot, rubyOnRails, flutter, android, mysql, postgresql, redis, docker, debian, git, odoo, allTechnologies, bootstrap, tailWindCSS, nodeJS, angular, electron, lang, backend, frontend, others, mobile, devops, database, libraries, erp }