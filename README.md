# hands-on

## デプロイ（Vercel + Supabase/Neon）

1. GitHub 連携済みの Vercel プロジェクトを作成する。
2. Project Settings → Environment Variables で以下を設定する。
   - `DB_PROVIDER=postgresql`
   - `DATABASE_URL=<Supabase/Neon の接続文字列>`
3. 初回デプロイ完了後、Vercel のローカル環境またはターミナルから以下を実行して DB マイグレーションを適用する。
   ```bash
   npx prisma migrate deploy
   ```
4. ロールバック / トラブルシュート。
   - 以前のデプロイに戻す: Vercel の **Deployments** から任意のデプロイを選択し **Redeploy**。
   - マイグレーション失敗時: `prisma migrate resolve --rolled-back <migration-name>` で状態を調整し、
     再度 `npx prisma migrate deploy` を実行する。

