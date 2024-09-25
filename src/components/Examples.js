import { useEffect } from 'react';

const Examples = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    
    const content = (
        <div>
            <div className="content-div">
                <div className="orange-banner-sm"></div>
                <h1>Welcome to Alaphia Moments</h1>
            </div>
            <div className="content-div">
                <h2>Examples</h2>
                <p></p>
                <p><strong>Identify a Specific Experience</strong></p>
                <p></p>
                <p>Think about a specific experience you'd like to explore. It could be something happening now or from the recent past. Ensure it's a clear, defined moment. If it's an ongoing scenario or a range of scenarios, focus on the last time you were in that situation.</p>
                <p></p>
                <p><strong>Here are some examples to guide you:</strong></p>
                <p></p>
                <p><strong>Jessica's Experience:</strong> Jessica is highly anxious about money and often wakes up at night with racing thoughts. Instead of exploring the problem in general, she might choose to focus on the last specific time she woke up in the middle of the night and explore that particular instance.</p>
                <p></p>
                <p><strong>Jerome's Reflection:</strong> Jerome earns a great income but has nothing to show for it. He knows he spends a lot on eating out and entertainment. Rather than examining the issue broadly, he reflects on last Friday night when he went out drinking with his friends.</p>
                <p></p>
                <p><strong>Laura and Megan's Challenge:</strong> Laura and Megan frequently argue about money. They keep their finances separate, and Laura, in particular, struggles with transparency and disclosure about finances —a pattern that has put their relationship at risk. There is a significant disparity between their incomes. Megan earns more and is inclined towards savings. Laura has adult children from a previous union, and she still occasionally helps them financially, much to Megan's disapproval. Her son reached out, asking for help making ends meet. Laura is considering sending him $2,000 and not telling Megan but instead decides to use this guide as a means of self-discovery before making a decision.</p>
                <p></p>
                <p><strong>Samira's Secret Pain:</strong>  Samira has a $30,000 credit card debt she hasn't told her fiancé about, a burden that casts a shadow on their relationship and causes her significant guilt. She has carried this secret the entire time they've been together, and part of her wants it to be out in the open. She has tried numerous times to rally the courage to tell him. She uses this guide to help her gain insight into why, despite promising herself she would tell him about the debt last weekend, she couldn't bring herself to do it at the last minute.</p>
                <br />
            </div>
        </div>
    )

    return content;
}

export default Examples;