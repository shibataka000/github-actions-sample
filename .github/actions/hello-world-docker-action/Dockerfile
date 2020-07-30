# コードを実行するコンテナイメージ
FROM alpine:3.10

# アクションのリポジトリからコードファイルをファイルシステムパスへコピー
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# dockerコンテナが起動する際に実行されるコードファイル (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
