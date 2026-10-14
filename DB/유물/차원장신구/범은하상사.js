export const 범은하상사 = {
    name: "범은하 상사",
    type: "accessory",
    effect2pc: "장착한 캐릭터의 효과 명중이 10% 증가한다. 동시에 장착한 캐릭터의 현재 효과 명중 25%만큼의 공격력이 증가하며 최대 25% 증가한다."
};

범은하상사.set2Buffs = {
    "효과 명중": 10
};

범은하상사.dynamicBuffs = {
    "공격력": (장착캐릭터) => {
        const 효과명중 = 장착캐릭터.finalStats["효과 명중"];
        return Math.min(효과명중 * 0.25, 25);
    }
};
