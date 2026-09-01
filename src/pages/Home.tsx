interface HomeProps {
    isDark: boolean
}

export default function Home({ isDark }: HomeProps) {
    return (
        <div className="content">
            <p>hi i'm anthony i make stuff</p>
            <p><a href='https://lfgtool.xyz'>https://lfgtool.xyz</a> - lfg tool</p>
            <p><a href='https://hotdog.cam'>https://hotdog.cam</a> - hot dog</p>
            <p><a href='https://github.com/ItzRock'>https://github.com/ItzRock</a> - my github</p>
            <p><a href='/cat'>https://anthonydev.xyz/cat</a> - picture of my cat</p>
            {!isDark && <p>OH MY GOD ITS SO BRIGHT TURN THE LIGHTS OFF</p>}
        </div>
    )
}
