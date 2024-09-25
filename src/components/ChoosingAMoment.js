import { useEffect } from 'react';

const ChoosingAMoment = () => {
    
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
                <h2>Choosing a Moment</h2>
                <p></p>
                <p><strong>How to Choose a Moment to Explore</strong></p>
                <p></p>
                <p>We suggest that you select a moment that connects to the reason you were inspired to try this exercise in the first place. This connection will make the exercise more relevant and impactful on your journey. If you have several moments that you would like to explore, we encourage you to do so. Start with whichever one seems the most approachable, and then go through this guide with each moment you want to explore. The more you use this guide, the more you will begin to see patterns and connections in your life that you weren't aware of before.</p>
                <p></p>
                <p><strong>Let's get started!</strong></p>
                <p></p>
                <p>By opening this tool and investing this time in yourself, you've already taken the first step on your path to an improved relationship with money. Each time you engage with this exercise, you take another step on that journey. Please take a moment to celebrate this win, and then let's begin.</p>
                <br />
            </div>
        </div>
    )

    return content;
}

export default ChoosingAMoment;