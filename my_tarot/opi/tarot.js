// 檔案位置：api/tarot.js
export default async function handler(req, res) {
    // 1. 檢查是否為正確的請求方式
    if (req.method !== 'POST') {
        return res.status(405).json({ error: '只允許 POST 請求' });
    }

    // 2. 從「保險箱」(環境變數) 拿出你的 API 鑰匙
    const apiKey = process.env.GEMINI_API_KEY;
    const prompt = req.body.prompt; // 接收前端傳來的占卜問題

    try {
        // 3. 由後端廚房代替前端去向 Google 拿解讀
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });
        
        const data = await response.json();
        
        // 4. 把 Google 給的答案原封不動端回給前端
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: '伺服器連線失敗' });
    }
}