$(document).ready(function () {
    let selectedWeather = null;
    let selectedFeeling = null;

    // 天気ボタン
    $('#sunny, #cloudy, #rainy').click(function () {
        selectedWeather = $(this).attr('id');
        $('.weather button').removeClass('selected');
        $(this).addClass('selected');
    });

    // 気分ボタン
    $('#good, #soso, #bad').click(function () {
        selectedFeeling = $(this).attr('id');
        $('.feeling button').removeClass('selected');
        $(this).addClass('selected');
    });

    // スタートボタン
    $('#start').click(function () {
        if (!selectedWeather || !selectedFeeling) {
            alert('天気と気分を選んでね！');
            return;
        }
        const suggestionsMap = {
            sunny: {
                good: [
                    {Image:"ショッピング.png"},
                    {Image:"ドライブ.png"},
                    {Image:"ピクニック.png"}
                ],
                soso: [
                    {Image:"散歩.png"},
                    {Image:"レストラン.png"},
                    {Image:"カフェ.png"},
                ],
                bad: [
                    {Image:"お昼寝.png"},
                    {Image:"漫画.png"},
                    {Image:"スイーツ.png"},
                ]
            },
            cloudy: {
                good: [
                    {Image:"映画.png"},
                    {Image:"猫カフェ.png"},
                    {Image:"美術館.png"},
                ],
                soso: [
                    {Image:"スポーツ.png"},
                    {Image:"ボードゲーム.png"},
                    {Image:"掃除.png"},
                ],
                bad: [
                    {Image:"ソファ.png"},
                    {Image:"ストレッチ.png"},
                    {Image:"ティータイム.png"},
                ]
            },
            rainy: {
                good: [
                    {Image:"ゲーム.png"},
                    {Image:"スイーツ作り.png"},
                    {Image:"アート.png"},
                ],
                soso: [
                    {Image:"外に出ない.png"},
                     {Image:"筋トレ.png"},
                    {Image:"勉強.png"},
                ],
                bad: [
                    {Image:"お家映画.png"},
                    {Image:"断捨離.png"},
                    {Image:"爆食い.png"},
                ]
            }
        };


        const suggestions = suggestionsMap[selectedWeather][selectedFeeling];
        const randomIndex = Math.floor(Math.random() * suggestions.length);
        const result = suggestions[randomIndex];

        // オブジェクト形式か、文字列かをチェックして処理を分ける
        if (typeof result === 'object') {
            $('#result-text').text(result.text);
            $('#result-image').attr('src', `img/${result.Image}`);
        } else {
            $('#result-text').text(result);
            // デフォルト画像を表示 or 非表示にする
            $('#result-image').attr('src', 'img/default.png'); 
        }

        $('#question-area').fadeOut(function () {
            $('#result-area').fadeIn();
        });
    });

    // 戻るボタンでリセット
    $('#back-button').click(function () {
        $('#result-area').fadeOut(function () {
            $('#question-area').fadeIn();
        });
    
        // 選択リセット
        selectedWeather = null;
        selectedFeeling = null;
        $('.weather button').removeClass('selected');
        $('.feeling button').removeClass('selected');
    });
});
