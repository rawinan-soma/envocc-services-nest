import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.group.createMany({
    data: [
      { name: 'ผู้บริหาร' },
      { name: 'กลุ่มบริหารทั่วไป' },
      { name: 'กลุ่มพัฒนาองค์กร' },
      { name: 'กลุ่มยุทธศาสตร์' },
      { name: 'กลุ่มอาชีวอนามัย' },
      { name: 'กลุ่มกฎหมาย' },
      { name: 'กลุ่มเฝ้าระวังและตอบโต้ภาวะฉุกเฉิน' },
      { name: 'กลุ่มเวชศาสตร์สิ่งแวดล้อม' },
      { name: 'กลุ่มสื่อสารความเสี่ยงและความรอบรู้สุขภาพ' },
      { name: 'ศูนย์พัฒนาวิชาการอาชีวอนามัยและสิ่งแวดล้อม จ.ระยอง' },
      { name: 'งานสุขศาสตร์อุตสาหกรรม' },
    ],
    skipDuplicates: true,
  });
  console.log('group seeded ');

  await prisma.position.createMany({
    data: [
      { name: 'ผู้อำนวยการกองโรคจากการประกอบอาชีพและสิ่งแวดล้อม' },
      { name: 'นายแพทย์' },
      { name: 'นักวิชาการด้านอาชีวอนามัยและเวชศาสตร์สิ่งแวดล้อม' },
      { name: 'นักวิชาการด้านงานวิชาการและงานต่างประเทศ' },
      { name: 'นักวิชาการพัสดุ' },
      { name: 'นักจัดการงานทั่วไป' },
      { name: 'นักวิชาการเงินและบัญชี' },
      { name: 'นักวิชาการเผยแพร่' },
      { name: 'นักวิเคราะห์นโยบายและแผน' },
      { name: 'นักวิชาการสาธารณสุข' },
      { name: 'นักวิทยาศาสตร์การแพทย์' },
      { name: 'นักทรัพยากรบุคคล' },
      { name: 'นักวิชาการคอมพิวเตอร์' },
      { name: 'เจ้าหน้าที่พัสดุ' },
      { name: 'เจ้าหน้าที่บัญชีและการเงิน' },
      { name: 'เจ้าพนักงานคอมพิวเตอร์' },
      { name: 'เจ้าพนักงานธุรการ' },
      { name: 'เจ้าพนักงานพัสดุ' },
      { name: 'พนักงานพัสดุ ส.3' },
      { name: 'พนักงานขับรถยนต์' },
      { name: 'นิติกร' },
      { name: 'นายช่างศิลป์' },
      { name: 'เด็กฝึกงาน' },
    ],
    skipDuplicates: true,
  });
  console.log('position seeded ');

  await prisma.position_level.createMany({
    data: [
      { name: 'ปฏิบัติการ' },
      { name: 'ชำนาญการ' },
      { name: 'ชำนาญการพิเศษ' },
      { name: 'เชี่ยวชาญ' },
      { name: 'ทรงคุณวุฒิ' },
      { name: 'ไม่มี' },
    ],
    skipDuplicates: true,
  });
  console.log('position level seeded');
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    console.log('seeding complete');
    prisma.$disconnect();
  });
