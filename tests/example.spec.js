import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata bath oonee.');
  await page.getByText('මට බත් ඕනේ.').click();
});


test('Pos_Fun_0002 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama gedhara yanavaa saha heta enavaa.');
  await page.getByText('මම ගෙදර යනවා සහ හෙට එනවා.').click();
});


test('Pos_Fun_0003 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('vaessa  unath api yanna epaeyi.');
  await page.getByText('වැස්ස  උනත් අපි යන්න එපැයි.').click();
});

test('Pos_Fun_0004 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaata kohomadha?');
  await page.getByText('ඔයාට කොහොමද?').click();
});

test('Pos_Fun_0005 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('issarahata yanna.');
  await page.getByText('ඉස්සරහට යන්න.').click();
});

test('Pos_Fun_0006 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama ehema karanavaa.');
  await page.getByText('මම එහෙම කරනවා.').click();
});

test('Pos_Fun_0007 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('suba udhaeesanak!');
  await page.getByText('සුබ උදෑසනක්!').click();
});

test('Pos_Fun_0008 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karuNaakaralaa magee lipinaya yavanna.');
  await page.getByText('කරුණාකරලා මගේ ලිපිනය යවන්න.').click();
});

test('Pos_Fun_0009 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('naee, mata eeka karanna puLuvan. ');
  await page.getByText('නෑ, මට ඒක කරන්න පුළුවන්.').click();
});

test('Pos_Fun_0010 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oya ennee.');
  await page.getByText('ඔය එන්නේ.').click();
});

test('Pos_Fun_0011 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('dhaen vahinavaa.');
  await page.getByText('දැන් වහිනවා.').click();
});


test('Pos_Fun_0012 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('gihin enna');
  await page.getByText('ගිහින් එන්න').click();
});


test('Pos_Fun_0013 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('heta api yanavaa.');
  await page.getByText('හෙට අපි යනවා.').click();
});


test('Pos_Fun_0014 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('chuttak chuttak');
  await page.getByText('චුට්ටක් චුට්ටක්').click();
});


test('Pos_Fun_0015 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api kaeema kanavaa.');
  await page.getByText('අපි කෑම කනවා.').click();
});


test('Pos_Fun_0016 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama dhannee naee.');
  await page.getByText('මම දන්නේ නෑ.').click();
});



test('Pos_Fun_0017 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama yanna hadhannee. oyaa enavadha?');
  await page.getByText('මම යන්න හදන්නේ. ඔයා එනවද?').click();
});


test('Pos_Fun_0018 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api yamu.');
  await page.getByText('අපි යමු.').click();
});

test('Pos_Fun_0019 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Teams meeting ekak thiyennee dhaen');
  await page.getByText('Teams meeting එකක් තියෙන්නේ දැන්').click();
});

test('Pos_Fun_0020 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api trip eka Kandy valata yamudha.');
  await page.getByText('අපි trip එක Kandy වලට යමුද.').click();
});

test('Pos_Fun_0021 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('NIC, PIN, OTP ');
  await page.getByText('NIC, PIN, OTP').click();
});


test('Pos_Fun_0022 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Rs. 5343');
  await page.getByText('Rs. 5343').click();
});


test('Pos_Fun_0023 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('12.00 noon');
  await page.getByText('12.00 noon').click();
});

test('Pos_Fun_0024 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('"suba dhaevasak oyaata! mama adha Kandy yanavaa magee parana yaaluvek hamba venna. api passe Colombo gihin loku dinner ekak gamu kiyalaa hithuvaa. oyaa enavaanam mata adha rathriya 8.00 PM venna kalin WhatsApp maesej ekak dhenna puLuvandha? naethnam mata email ekak evanna. meeka godak vaedhagath mokadha api goda kaalekin hamba vuna nisaa. suba gaman! parissamin gihin enna."');
  await page.getByText('"සුබ දැවසක් ඔයාට! මම අද Kandy යනවා මගේ පරන යාලුවෙක් හම්බ වෙන්න. අපි පස්සෙ Colombo ගිහින් ලොකු dinner එකක් ගමු කියලා හිතුවා. ඔයා එනවානම් මට අද රත්‍රිය 8.00 PM වෙන්න කලින් WhatsApp මැසෙජ් එකක් දෙන්න පුළුවන්ද? නැත්නම් මට email එකක් එවන්න. මේක ගොඩක් වැදගත් මොකද අපි ගොඩ කාලෙකින් හම්බ වුන නිසා. සුබ ගමන්! පරිස්සමින් ගිහින් එන්න."').click();
});


test('Pos_Fun_0025 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('supiri!!');
  await page.getByText('සුපිරි!!').click();
});


test('Pos_Fun_0026 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('dhesaembar 25');
  await page.getByText('දෙසැම්බර් 25').click();
});




test('Neg_Fun_0001 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('MaMa GeDhArA YaNaVaA');
  await page.getByText('මම ගෙදර යනවා').click();
});


test('Neg_Fun_0002 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api heta ennee naehaeee.');
  await page.getByText('අපි හෙට එන්නේ නැහැ.').click();
});

test('Neg_Fun_0003 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
 await page.goto('https://www.swifttranslator.com/');
 await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api kaeema kanawaa.');
 await page.getByText('අපි කෑම කනවා.').click();
});

test('Neg_Fun_0004 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Teams meeting ekee link eka WhatsApp karanna.');
  await page.getByText('ටිම්ස් මිටින් එකේ ලින්ක් එක වට්සෙප් කරන්න.').click();
});

test('Neg_Fun_0005 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama gedhara yanawa');
  await page.getByText('මම ගෙදර යනවා').click();
});


test('Neg_Fun_0006 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api passee\nkathaa karamu eka gaena.');
  await page.getByText('අපි පස්සේ\න්කතා කරමු එක ගැන.').click();
});


test('Neg_Fun_0007 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama </br> gedhara');
  await page.getByText('මම ගෙදර').click();
});


test('Neg_Fun_0008 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('m a m a g e d h a r a');
  await page.getByText('මම ගෙදර').click();
});


test('Neg_Fun_0009 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('"dhitvaa suLi kuNaatuva samaGa aethi Wuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana, mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya. meeka godak bayaanaka thathvayak nisaa okkoma parissamin inna oonea kiyalaa api hithanavaa. dhesaembar 25 nisaa traffic thivenna puLuvan."');
  await page.getByText('"දිට්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කොටස් 430ක් විනාශයට පත්ව ඇති අතර, එහි සමස්ත දිග ප්‍රමාණය කිලෝමීටර් 300ක් පමණ වන බව ප්‍රවාහන, මහාමාර්ග සහ නාගරික සංවර්ධන අමාත්‍ය බිමල් රත්නායක සඳහන් කළේය. මේක ගොඩක් බයානක තත්වයක් නිසා ඔක්කොම පරිස්සමින් ඉන්න ඕනේ කියලා අපි හිතනවා. දෙසැම්බර් 25 නිසා traffic තිවෙන්න පුළුවන්."').click();
});

test('Neg_Fun_0010 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama and nangi gamee giyaa.');
  await page.getByText('මම සහ නංගි ගමේ ගියා.').click();
});


test('Neg_Fun_0011 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('dfdgrdhhhd');
  await page.getByText('ඩ්ෆ්ඩ්ග්‍රද්හ්හ්ඩ්').click();
});


