export const 도적국탈리아 = {
    name: "도적국 탈리아",
    type: "accessory",
    effect2pc: "장착한 캐릭터의 격파 특수효과가 16% 증가한다. 장착한 캐릭터의 속도가 145 이상일 경우 격파 특수효과가 추가로 20% 증가한다."
};

도적국탈리아.set2Buffs = {
    "격파 특수효과": 16
};

도적국탈리아.dynamicBuffs = {
    "격파 특수효과": (장착캐릭터) => {
        const 속도 = 장착캐릭터.finalStats["속도"];
        return 속도 >= 145 ? 20 : 0;
    }
};
