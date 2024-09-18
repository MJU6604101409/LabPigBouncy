import { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(1);
  
  const feedAnimal = (food) => {
    let addedLevel = 0;
    if (food === 'WaterMelon') addedLevel = 5;
    if (food === 'PumKin') addedLevel = 10;
    if (food === 'Avocado') addedLevel = 20;

    setLevel((prevLevel) => Math.min(prevLevel + addedLevel, 100));
  };

  const resetGame = () => {
    setLevel(1); 
  };

  const calculateImageSize = () => {
    const baseSize = 50;
    const maxSize = 1000;
    const sizeIncrease = Math.floor(level / 5) * 20;
    return Math.min(baseSize + sizeIncrease, maxSize);
  };

  return (
    <>
      <div style={{ background: 'gray' }}>
        <h3 style={{ textAlign: 'center', padding: '2px' }}>Level {level}</h3>

        {/* ส่วนหมูเด้ง */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '30px' }}>
          <img src={level >= 100 ? "/picture/แปลงร่างอัลตร้า.jpg" : "/picture/หมูสวยจบป่ะ.jpg"} alt="หมูเด้ง" style={{ width: calculateImageSize(),
            height: 'auto', 
            transition: 'width 0.5s'
          }} />
        </div>

        {/* ปุ่มให้อาหาร พร้อมป้ายชื่อ */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', alignItems: 'center', marginTop: '30px' }}>
          {/* แตงโม */}
          <div style={{ textAlign: 'center' }}>
            <button className="square">
              <img src="/picture/แตงแตงแตงไหม.jpg" alt="แตงโมจ้าาา" style={{ width: '100px', height: '100px' }}
              onClick={() => feedAnimal('WaterMelon')} />
            </button>
            <p>แตงโม</p>
          </div>

          {/* ฟักทอง */}
          <div style={{ textAlign: 'center' }}>
            <button className="square">
              <img src="/picture/ฟักเหลือง.jpg" alt="ฟักทองจ้าาา" style={{ width: '100px', height: '100px' }}
              onClick={() => feedAnimal('PumKin')} />
            </button>
            <p>ฟักทอง</p>
          </div>

          {/* อโวคาโด */}
          <div style={{ textAlign: 'center' }}>
            <button className="square">
              <img src="/picture/โรนัลโด้.jpg" alt="อโวคาโดจ้าาา" style={{ width: '100px', height: '100px' }}
              onClick={() => feedAnimal('Avocado')} />
            </button>
            <p>อโวคาโด</p>
          </div>
        </div>

        {/* ปุ่มรีเซ็ต */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button onClick={resetGame} style={{ padding: '10px 20px', background: 'red', color: 'white', border: 'none', borderRadius: '5px' }}>
            รีเซ็ตเกม
          </button>
        </div>
      </div>
    </>
  );
}
