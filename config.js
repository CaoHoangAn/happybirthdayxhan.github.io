// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Xin chào cô yêu quý của tụi con ,",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        " Hôm nay là bữa tiệc sinh nhật của cô!!! :D",  // 同上...
        "Con mong là sẽ lun lun xinh đẹp! ;)",
        "Chúc cô luôn thành công trong công việc ,",
        " Tụi con đôi khi hơi nghịch ngợm ,",
        "Khiến cho cô phải muộn phiền. ,",
        "Nhưng cô vẫn vì tụi con mà tận tâm ,",
        " Giúp đỡ tụi con chèo tiếp con thuyền ước mơ ,",
        "Vì Vậy Nên Nhân Dịp Ngày Hôm Nay , ", 
        "Tụi con xin cảm ơn Cô vì tất cả ,",
        "Chúc Mừng Sinh Nhật 'Chị Thoa' yêu dấu~~ ,",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Tối Quá, Ấn Vào Đây Để Bật Đèn lên Đi Nào",
        play: "Ấn Vào Tiếp Đeeee",
        bannar_coming: "Cùng Trang Trí Thêm Tí Nào",
        balloons_flying: "Thêm Tí Bong Bóng Nữa",
        cake_fadein: "Thêm Tí Bánh Nữa Chứ？",
        light_candle: "Quên Bật Đèn Cầy Lên Rồi Kìa",
        wish_message: "Happy Birthday",
        story: "Còn Đây Là Lời Chúc Của Thằng An Nè",
    }
};
