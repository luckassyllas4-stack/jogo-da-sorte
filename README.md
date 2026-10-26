# MEGA RASPADINHA — pastas
- `publico-funcional/` — raspadinha pública (servir a pasta raiz com um servidor estático, ex.: `npx serve`; módulos ES não abrem via file://).
- `admin-para-mim/` — painel de configuração (nome, cores, textos, 3 banners, suporte).
- `compartilhado/store.js` — camada de dados. Hoje: modo demonstrativo (localStorage, sem dinheiro real).
- `firebase/` — regras do Firestore e Storage (ainda não implantadas).

## Falta para produção (NÃO feito)
1. Criar projeto Firebase, colar `firebaseConfig` em `store.js` e trocar localStorage por Firestore.
2. Firebase Auth + primeiro admin via script no servidor (claim `admin`).
3. Backend (Cloud Run) para sorteio, `gameResults`, pagamentos/webhook e auditoria.
4. Upload de imagens no Storage (hoje o painel aceita URL https).
5. Migrar para React + TypeScript, PWA, política de privacidade e testes.
Pagamento, Pix e prêmios reais permanecem desativados até validação jurídica.
