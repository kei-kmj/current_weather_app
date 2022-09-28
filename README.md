# weather_app
Node.jsとopenweathreAPIで都市の天気情報を取得するappです。

# 開発・動作環境
- OS: Windows10 x64
- Node: v16.14.2

# install
$ git clone https://github.com/kei-kmj/weather_app.gi

# 環境設定
コマンドラインから実行するために、以下の設定をします。
## env の作成
.example.env を .env にリネームし、必要な項目を埋めます。

# 使い方
- `$ node main.js` <br>
`.env`で指定した都市の天気、気温、湿度、風速、過去1時間の降雨量を表示します

<img width="183" alt="toukyou" src="https://user-images.githubusercontent.com/82737807/191677431-c5e4faa3-4530-41f2-904e-631c0f7fa0c9.png">

- `$ node main.js　naha` <br>
入力した都市の天気、気温、湿度、風速、過去1時間の降雨量を表示します



<img width="183" alt="那覇" src="https://user-images.githubusercontent.com/82737807/191677445-a973c40d-e608-40b1-846a-6d67859e10dc.png">

# ライセンス
MIT
