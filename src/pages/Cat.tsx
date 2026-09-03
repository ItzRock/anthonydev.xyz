export default function Cat() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        }}>
            <img src="/cat.png" alt="cat" style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
        </div>
    )
}
