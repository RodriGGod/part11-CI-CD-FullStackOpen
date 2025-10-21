## Exercise 11.1 — CI/CD warm-up (JavaScript/TypeScript)

Para JS/TS, el linting suele hacerse con **ESLint** (reglas base + @typescript-eslint si usamos TS). Para formato consistente, **Prettier** es el estándar; como alternativa unificada (lint+format), **Biome** está ganando tracción. El chequeo de tipos lo realiza **TypeScript (tsc)** en modo `--noEmit` dentro del pipeline.

En testing, **Vitest** o **Jest** cubren unit/integration con buen soporte a mocks y coverage (Istanbul/c8). Para UI, **Testing Library** facilita tests orientados al usuario. Para end-to-end, **Playwright** o **Cypress** validan flujos reales; en monorepos, combinar con **pnpm** y **turborepo**/**Nx** acelera y orquesta tareas. En build, proyectos modernos usan **Vite** (esbuild/rollup) o **tsup**/**esbuild** para libs; **Webpack/Rollup** siguen siendo comunes según el caso.

Alternativas a Jenkins/GitHub Actions: **GitLab CI/CD**, **CircleCI**, **Travis CI**, **Azure DevOps Pipelines**, **Bitbucket Pipelines**, **Buildkite**, **TeamCity** o **Bamboo**. Todas permiten pipelines declarativos, caché de dependencias, artifacts y gestión de secretos.

¿Self-hosted o cloud? Para un equipo de ~6 personas en desarrollo activo, **cloud** suele ser mejor (menos mantenimiento, runners listos, buen ecosistema de acciones, coste por uso). Iría a self-hosted si hay requisitos estrictos de **seguridad/compliance**, necesidad de **hardware especial** (p. ej., navegadores con GPU, builds muy pesados o self-hosted runners con Chrome estable), integración con red interna o si se busca **coste fijo** y control total.

Para decidir con datos pediría: tiempos de build/test, concurrencia prevista, necesidad de caché y artifacts, presupuesto y SLA, requisitos de secretos/PII, soporte para monorepo, matrices (Node 18/20/22), necesidades de E2E (browsers), y estrategia de entornos (preview/staging/prod con migraciones).
