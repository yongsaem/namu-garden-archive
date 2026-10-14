export const 축성가의벨로보그 = {
    name: "축성가의 벨로보그",
    type: "accessory",
    effect2pc: "장착한 캐릭터의 방어력이 15% 증가한다. 장착한 캐릭터의 효과 명중이 50% 이상일 경우 방어력이 추가로 15% 증가한다."
};

축성가의벨로보그.set2Buffs = {
    "방어력": 15
};

축성가의벨로보그.dynamicBuffs = {
    "방어력": (장착캐릭터) => {
        const 효과명중 = 장착캐릭터.finalStats["효과 명중"];
        return 효과명중 >= 50 ? 15 : 0;
    }
};