// 1. 建立 22 張大牌資料庫 (根據 PressPlay 文章內容濃縮)
const tarotDeck = [
    { 
        name: "0. 愚者 (The Fool)", 
        keywords: "無限可能性、天真、自由", 
        upright: "一段全新的旅程即將開始，帶著純真與勇氣大步向前，不要害怕未知的風險。",
        reversed: "過度魯莽、缺乏計畫，或是因為恐懼而遲遲不敢邁出第一步，錯失良機。"
    },
    { 
        name: "I. 魔術師 (The Magician)", 
        keywords: "創造力、主動、資源具備", 
        upright: "你已具備成功的條件與資源，現在是集中意志力，主動出擊去實踐目標的好時機。",
        reversed: "能力可能被濫用或隱藏，計畫停滯不前，需提防騙局或缺乏自信導致失敗。"
    },
    { 
        name: "II. 女祭司 (The High Priestess)", 
        keywords: "直覺、潛意識、靜止", 
        upright: "現在適合靜下心來傾聽內在的聲音，相信你的直覺，事情的真相隱藏在表面之下。",
        reversed: "忽視內心直覺，過度依賴表面理智，或是情緒波動較大，拒絕接受隱藏的真相。"
    },
    { 
        name: "III. 皇后 (The Empress)", 
        keywords: "豐收、孕育、母性與愛", 
        upright: "這是充滿愛、創造力與豐收的時期，適合享受生活、孕育新計畫或人際關係的和諧。",
        reversed: "可能出現過度溺愛、依賴，或是計畫發展停滯、缺乏生產力的狀況。"
    },
    { 
        name: "IV. 皇帝 (The Emperor)", 
        keywords: "權力、秩序、穩定", 
        upright: "你需要展現領導力與紀律，透過建立規則與穩定的架構來達成目標，代表世俗的成功。",
        reversed: "可能變得過度專制、固執，或是缺乏自律與控制力，導致秩序混亂。"
    },
    { 
        name: "V. 教皇 (The Hierophant)", 
        keywords: "傳統、信仰、教育", 
        upright: "遵循傳統規範或尋求長輩、專業人士的指導會帶來幫助，代表學習與精神層面的指引。",
        reversed: "想要打破常規、挑戰權威，或是遇到僵化教條的束縛，需要尋找屬於自己的新信念。"
    },
    { 
        name: "VI. 戀人 (The Lovers)", 
        keywords: "選擇、愛情、結合", 
        upright: "面臨重要的抉擇，或是會迎來一段和諧的關係與合作，跟隨你的真心做決定。",
        reversed: "關係出現裂痕、面臨錯誤的選擇，或是內心充滿矛盾與誘惑。"
    },
    { 
        name: "VII. 戰車 (The Chariot)", 
        keywords: "意志力、勝利、控制", 
        upright: "只要保持專注與強大的意志力，就能克服眼前的困難，取得勝利與進展。",
        reversed: "失去方向感、情緒失控，或是遭遇阻礙導致計畫延遲，需要重新掌握主導權。"
    },
    { 
        name: "VIII. 力量 (Strength)", 
        keywords: "內在力量、耐心、柔性", 
        upright: "用溫和與耐心取代強硬，你擁有足夠的內在力量去克服恐懼與挑戰。",
        reversed: "感到軟弱無力、缺乏自信，或是被本能與情緒所控制，難以展現勇氣。"
    },
    { 
        name: "IX. 隱者 (The Hermit)", 
        keywords: "內省、孤獨、尋道", 
        upright: "暫時遠離人群，這是一個適合自我反思、尋求內在智慧與指引的時期。",
        reversed: "過度孤立自己、逃避現實，或是無法從過往的經驗中學習，感到迷惘。"
    },
    { 
        name: "X. 命運之輪 (Wheel of Fortune)", 
        keywords: "轉捩點、循環、契機", 
        upright: "命運的齒輪正在轉動，將迎來不可預期的改變與好運，順應時勢而為。",
        reversed: "運勢進入低谷、遭遇突如其來的阻礙，需要耐心等待下一次轉機。"
    },
    { 
        name: "XI. 正義 (Justice)", 
        keywords: "平衡、因果、理性", 
        upright: "事情將得到公平的裁決，保持理性與客觀，你的決定將帶來相應的結果。",
        reversed: "遭遇不公平的對待、帶有偏見的判斷，或是合約、法律上出現糾紛。"
    },
    { 
        name: "XII. 倒吊人 (The Hanged Man)", 
        keywords: "犧牲、換位思考、暫停", 
        upright: "現在需要暫停行動，換個角度看事情。自願的犧牲將換來更深層的領悟。",
        reversed: "做無謂的犧牲、鑽牛角尖，或是因為不願改變而讓自己陷入僵局。"
    },
    { 
        name: "XIII. 死神 (Death)", 
        keywords: "結束、轉變、新生", 
        upright: "某個階段即將結束，這是必要的汰舊換新。放下過去，才能迎來全新的開始。",
        reversed: "抗拒改變、緊抓著過去不放，導致痛苦延續，無法展開新生活。"
    },
    { 
        name: "XIV. 節制 (Temperance)", 
        keywords: "平衡、調和、中庸", 
        upright: "在不同事物間找到完美的平衡，保持身心靈的和諧，事情會穩健發展。",
        reversed: "生活失去平衡、過度極端，或是溝通不良導致衝突與消耗。"
    },
    { 
        name: "XV. 惡魔 (The Devil)", 
        keywords: "束縛、誘惑、物質", 
        upright: "你可能正被物質慾望、不良習慣或一段有害的關係所困綁，感到身不由己。",
        reversed: "意識到自己的困境，開始掙脫束縛，重獲自由與理智的曙光。"
    },
    { 
        name: "XVI. 高塔 (The Tower)", 
        keywords: "突變、破壞、覺醒", 
        upright: "突如其來的巨大打擊或改變，將摧毀原有的虛假安穩，但這也是看清真相的契機。",
        reversed: "害怕改變而死守現狀，或是災難的影響被減輕，但問題依然存在。"
    },
    { 
        name: "XVII. 星星 (The Star)", 
        keywords: "希望、療癒、靈感", 
        upright: "在經歷風雨後迎來平靜與希望，保持樂觀，你的靈感與願望將會實現。",
        reversed: "感到悲觀、失去信心，或是期望過高導致失望，需要重新找回方向。"
    },
    { 
        name: "XVIII. 月亮 (The Moon)", 
        keywords: "不安、幻覺、潛意識", 
        upright: "充滿未知與不安的時期，事情的真相不明朗，容易被情緒與恐懼牽著走。",
        reversed: "迷霧逐漸散去，看清了謊言與真相，內心的焦慮與恐懼開始平息。"
    },
    { 
        name: "XIX. 太陽 (The Sun)", 
        keywords: "成功、喜悅、生命力", 
        upright: "充滿活力與光明，事情將會順利發展，這是獲得成功、快樂與豐收的絕佳時刻。",
        reversed: "雖然還是有好的結果，但熱情減退，或是成功被延遲，需要找回純粹的快樂。"
    },
    { 
        name: "XX. 審判 (Judgement)", 
        keywords: "重生、覺醒、結果", 
        upright: "過去的努力將得到最終的評價，這是一個自我覺醒、原諒過去並重獲新生的時刻。",
        reversed: "逃避現實、不願面對過去的錯誤，或是因為過度自責而無法前進。"
    },
    { 
        name: "XXI. 世界 (The World)", 
        keywords: "圓滿、完成、完美", 
        upright: "一個長期的目標或旅程達到了完美的終點，代表圓滿成功與進入下一個層次的準備。",
        reversed: "計畫無法順利完成、缺少了最後一塊拼圖，或是因為眷戀現狀而不願邁向新階段。"
    }
];

// 2. 抽牌主程式
async function drawCard() {
    const display = document.getElementById('card-display');
    const category = document.getElementById('question-category').value;
    const aiBox = document.getElementById('ai-result');
    const aiText = document.getElementById('ai-text');
    
    // 隨機抽牌與正逆位
    const selectedCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    const isUpright = Math.random() > 0.5;
    const positionName = isUpright ? "正位" : "逆位";
    const basicMeaning = isUpright ? selectedCard.upright : selectedCard.reversed;

    // 更新基本牌面顯示
    display.innerHTML = `
        <div class="card-pos">【${positionName}】</div>
        <div class="card-name">${selectedCard.name}</div>
        <hr>
        <p><strong>關鍵字：</strong>${selectedCard.keywords}</p>
        <p><strong>基本牌義：</strong>${basicMeaning}</p>
    `;

    // 顯示 AI 區塊並顯示載入中
    aiBox.style.display = "block";
    aiText.innerHTML = "🔮 AI 正在感應牌意中，請稍候...";

    // 3. 準備給 AI 的提示詞 (Prompt)
    const promptMessage = `
        我正在進行塔羅占卜。
        我抽到的牌是：「${selectedCard.name}」，狀態是：「${positionName}」。
        我想問的問題分類是：「${category}」。
        傳統牌義是：「${basicMeaning}」。
        請根據以上資訊，扮演專業塔羅師，給我一段大約 80 字的專屬神祕學解讀。
    `;

    // 4. 呼叫 AI 取得解讀
    const aiResponse = await fetchAIInterpretation(promptMessage);
    aiText.innerHTML = aiResponse;
}

// 檔案位置：script.js (最下方)
// 5. 串接 AI API 的專屬函式 (🌟 安全後端版 🌟)
async function fetchAIInterpretation(prompt) {
    try {
        // 這裡不再寫網址和 API Key，而是直接呼叫我們剛剛建立的廚房 (/api/tarot)
        const response = await fetch(`/api/tarot`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: prompt }) // 把問題傳給廚房
        });
        
        const data = await response.json();

        // 成功取得 AI 的解讀文字並回傳到畫面上
        if (data.candidates && data.candidates.length > 0) {
            let aiText = data.candidates[0].content.parts[0].text;
            return aiText.replace(/\n/g, "<br>");
        } else {
            return `🚨 <b>AI 回應異常：</b><br><code>${JSON.stringify(data)}</code>`;
        }

    } catch (error) {
        return `🚨 <b>連線發生錯誤：</b><br>${error.message}`;
    }
}