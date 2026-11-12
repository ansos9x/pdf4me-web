// Guide: compress a scanned PDF to under 1 MB for online submissions (pillar #1).
// Screenshots were captured from the real Compress tool (Vietnamese UI, dark theme)
// with a generated 5-page scanned-style sample PDF (4.4 MB).

const IMG = '/images/guides/nen-pdf-1mb/';
const SIZE = { width: 1920, height: 2200 };

export default {
  id: 'compress-pdf-under-1mb',
  tool: 'compress-pdf',
  status: 'published',
  published: '2026-11-12',
  updated: '2026-11-12',
  images: [1, 2, 3, 4, 5, 6].map((n) => ({
    src: `${IMG}step-${n}.png`,
    ...SIZE,
  })),

  vi: {
    slug: 'nen-pdf-duoi-1mb',
    cover: {
      src: `${IMG}cover-vi.png`,
      width: 1200,
      height: 630,
      alt: 'Ảnh bìa: một file PDF 4.4 MB được nén xuống còn 818 KB',
    },
    kicker: 'Nén PDF',
    title: 'Cách nén file PDF xuống dưới 1MB để nộp hồ sơ online',
    description:
      'Hướng dẫn nén file PDF scan xuống dưới 1MB ngay trên trình duyệt để nộp hồ sơ dịch vụ công hoặc gửi email: từng bước có ảnh minh họa, mẹo và câu hỏi thường gặp.',
    listingSummary:
      'Thu nhỏ file PDF scan xuống dưới 1MB ngay trong trình duyệt để nộp hồ sơ dịch vụ công hoặc gửi email, kèm ảnh minh họa từng bước.',
    intro:
      'Cổng nộp hồ sơ báo “tệp quá lớn”? Bài này hướng dẫn bạn thu nhỏ file PDF scan xuống dưới 1MB bằng công cụ Nén PDF của PDF4Me. Mọi bước chạy ngay trong trình duyệt và tệp không bị tải lên máy chủ. Bạn sẽ làm theo 5 bước chính, cộng thêm 1 bước tùy chọn dành cho file scan vẫn còn quá nặng.',
    sections: [
      {
        id: 'vi-sao-nang',
        title: 'Vì sao file PDF scan thường nặng?',
        html: `
<p>Mỗi trang giấy bạn scan hoặc chụp bằng điện thoại thực chất là một bức ảnh độ phân giải cao được đóng gói vào PDF, nên chỉ vài trang cũng có thể lên tới vài MB. File mẫu dùng trong bài này gồm 5 trang scan và nặng 4,4 MB. Trong khi đó, cổng dịch vụ công hay hộp thư điện tử thường chỉ nhận tệp nhỏ hơn nhiều, và mỗi nơi đặt một giới hạn riêng. Vì vậy hãy đọc kỹ yêu cầu của nơi bạn nộp hồ sơ trước khi bắt đầu.</p>
<p>Công cụ Nén PDF thu nhỏ file chủ yếu bằng cách nén lại các hình ảnh bên trong, đồng thời gộp phông chữ và loại bỏ phần dữ liệu thừa. Với file có chữ gõ sẵn, văn bản, liên kết và biểu mẫu vẫn hoạt động bình thường sau khi nén.</p>`,
      },
      {
        id: 'hieu-dung',
        title: 'Hiểu đúng về chế độ biến trang thành ảnh',
        kind: 'note',
        html: `
<p>Công cụ còn có tùy chọn <strong>Rasterize các trang thành hình ảnh</strong> trong phần Cài đặt tùy chỉnh. Khi bật, mỗi trang được dựng lại thành một bức ảnh, nên tùy chọn này hợp nhất với bản scan chỉ gồm ảnh và bình thường bạn không mất thêm gì, vì file scan vốn không có chữ để chọn.</p>
<p>Nếu tài liệu có văn bản chọn được, công cụ sẽ bỏ qua tùy chọn này. Chỉ khi bạn bật thêm <strong>Ghi đè bảo vệ nội dung</strong> thì trang mới bị dựng thành ảnh và chữ không còn chọn được. Nén nào cũng đánh đổi chất lượng hình ảnh lấy dung lượng, nên kết quả khác nhau tùy từng file. Hãy luôn mở lại file đã nén để kiểm tra trước khi nộp.</p>`,
      },
      {
        id: 'chuan-bi',
        title: 'Chuẩn bị trước khi nén',
        html: `
<ul>
  <li><strong>Biết giới hạn của nơi nộp:</strong> dung lượng tối đa cho mỗi tệp và định dạng được chấp nhận. Ghi lại để so sánh sau khi nén.</li>
  <li><strong>Giữ bản gốc:</strong> công cụ tải về file kết quả với đúng tên của file gốc, nên hãy lưu vào thư mục khác hoặc đổi tên để không ghi nhầm lên bản gốc.</li>
  <li><strong>File đã ký số:</strong> mặc định công cụ để nguyên và báo “PDF đã ký không thay đổi”, vì nén sẽ làm hỏng chữ ký. Hãy nén bản chưa ký, rồi ký sau.</li>
  <li><strong>File có mật khẩu:</strong> bạn sẽ được hỏi mật khẩu. Bản nén không còn mật khẩu, nên nếu cần hãy đặt lại bằng công cụ <a href="/vi/protect-pdf">Bảo vệ PDF</a>.</li>
</ul>`,
      },
    ],
    stepsTitle: 'Hướng dẫn nén PDF xuống dưới 1MB từng bước',
    stepsIntro:
      'Ảnh minh họa dùng giao diện tiếng Việt: vòng đỏ đánh dấu chỗ cần thao tác, khung phóng to ở góc giúp bạn đọc chữ nhỏ.',
    steps: [
      {
        title: 'Mở công cụ Nén PDF và chọn tệp',
        alt: 'Trang Nén PDF với khung “Nhấp để chọn tệp hoặc kéo và thả” được khoanh đỏ',
        caption: 'Bước 1: bấm vào khung chọn tệp hoặc kéo file PDF vào đó.',
        html: `
<p>Mở trang <a href="/vi/compress-pdf">Nén PDF</a>. Bấm vào khung <strong>“Nhấp để chọn tệp hoặc kéo và thả”</strong> rồi chọn file PDF trên máy, hoặc kéo thả file thẳng vào khung. Bạn có thể chọn nhiều tệp cùng lúc nếu cần nén cả bộ hồ sơ.</p>`,
      },
      {
        title: 'Kiểm tra dung lượng gốc',
        alt: 'Tên tệp ho-so-scan-mau.pdf và dung lượng 4.4 MB hiện dưới khung chọn tệp, được khoanh đỏ',
        caption: 'Bước 2: tên tệp và dung lượng hiện ngay dưới khung chọn tệp.',
        html: `
<p>Sau khi nạp xong, tên tệp và dung lượng xuất hiện bên dưới khung, ví dụ <em>ho-so-scan-mau.pdf, 4.4 MB</em>. Hãy so con số này với giới hạn của nơi nộp để biết cần giảm bao nhiêu. Chọn nhầm file thì bấm biểu tượng thùng rác ở bên phải để bỏ ra. Các tùy chọn nén sẽ hiện ra ngay bên dưới.</p>`,
      },
      {
        title: 'Chọn mức nén',
        alt: 'Ô “Mức nén” đang chọn “Trung bình (Khuyến nghị)”, được khoanh đỏ',
        caption: 'Bước 3: mức nén mặc định là “Trung bình (Khuyến nghị)”.',
        html: `
<p>Ô <strong>Mức nén</strong> mặc định là <strong>Trung bình (Khuyến nghị)</strong> và thường là điểm xuất phát hợp lý. Bạn có thể chọn Thấp (Chất lượng tốt nhất), Cao (Tệp nhỏ nhất) hoặc Không mất dữ liệu (Không giảm chất lượng); mức Không mất dữ liệu giữ nguyên chất lượng nên thường giảm được ít hơn. Khi đặt dung lượng mục tiêu ở bước sau, công cụ sẽ tự tìm chất lượng tốt nhất vẫn vừa mức đó, nên bạn không cần đoán mức nào là đủ.</p>`,
      },
      {
        title: 'Nhập dung lượng mục tiêu',
        alt: 'Ô “Dung lượng tệp mục tiêu (Tùy chọn)” đã nhập 900 và đơn vị KB, được khoanh đỏ',
        caption: 'Bước 4: nhập 900 và chọn đơn vị KB.',
        html: `
<p>Ở ô <strong>Dung lượng tệp mục tiêu (Tùy chọn)</strong>, nhập <strong>900</strong> rồi chọn đơn vị <strong>KB</strong> (hoặc nhập 0,9 và chọn MB). Vì sao không nhập đúng 1000? Công cụ tính 1 MB là 1.048.576 byte, trong khi nơi nộp có thể tính 1 MB là 1.000.000 byte. Chừa một khoảng dư nhỏ sẽ giúp bạn tránh bị từ chối vì chênh vài chục KB.</p>`,
      },
      {
        title: 'Bấm Nén PDF và đọc kết quả',
        alt: 'Hộp thoại “Nén hoàn tất” báo dung lượng giảm từ 4.4 MB xuống 818.3 KB, được khoanh đỏ',
        caption: 'Bước 5: hộp thoại báo dung lượng trước và sau khi nén.',
        html: `
<p>Bấm nút <strong>Nén PDF</strong>. Công cụ xử lý ngay trong trình duyệt, tự tải file kết quả về máy và hiện hộp thoại. Với file mẫu, hộp thoại ghi: <em>“Nén hoàn tất. Dung lượng tệp giảm từ 4.4 MB xuống 818.3 KB (Tiết kiệm 81.6%). Đạt mục tiêu 900 KB.”</em> Đây là kết quả của riêng file mẫu; file của bạn có thể cho kết quả khác. Bấm OK để đóng.</p>
<p>Nếu bạn thêm nhiều tệp, kết quả được tải về dưới dạng một file zip tên <em>compressed-pdfs.zip</em>. Nếu hộp thoại báo “Chưa đạt mục tiêu”, hãy sang bước 6.</p>`,
      },
      {
        title: 'Khi cần: bật Rasterize cho file scan còn nặng',
        optional: true,
        alt: 'Mục “Raster hóa” trong Cài đặt tùy chỉnh với ô “Rasterize các trang thành hình ảnh” đã tích, được khoanh đỏ',
        caption:
          'Bước 6 (tùy chọn): tích “Rasterize các trang thành hình ảnh”.',
        html: `
<p>Nếu file vẫn chưa xuống mức mong muốn và nó chỉ gồm ảnh scan, hãy bấm <strong>Cài đặt tùy chỉnh</strong>, mở mục <strong>Raster hóa</strong> và tích <strong>Rasterize các trang thành hình ảnh</strong>. Ô Mức nén sẽ tự chuyển sang “Tùy chỉnh”. Bên dưới có hai ô để chỉnh độ phân giải (mặc định 150 DPI) và chất lượng (mặc định 50). Giảm các giá trị này làm file nhẹ hơn nhưng chữ sẽ kém nét hơn, nên hãy thử từng chút một.</p>
<p>Sau đó bấm lại <strong>Nén PDF</strong> như ở bước 5. Hãy nhớ lại phần “Hiểu đúng” ở trên: tùy chọn này bị bỏ qua với tài liệu có văn bản chọn được.</p>`,
      },
    ],
    tips: {
      title: 'Mẹo và lưu ý',
      items: [
        '<strong>Xem lại trước khi nộp:</strong> mở file đã nén, lướt qua từng trang và kiểm tra chữ, con dấu, chữ ký còn đọc rõ không.',
        '<strong>Đổi tên tệp:</strong> file kết quả mang tên giống file gốc, hãy đổi tên theo yêu cầu của cổng nộp hồ sơ nếu có.',
        '<strong>Bớt trang thừa:</strong> trang trắng hoặc trang không cần thiết làm file nặng thêm. Bạn có thể bỏ chúng bằng công cụ <a href="/vi/delete-pages">Xóa trang</a> trước khi nén.',
        '<strong>Quá nhiều giấy tờ:</strong> nếu nơi nộp cho phép nhiều tệp, hãy tách hồ sơ thành các phần bằng <a href="/vi/split-pdf">Chia PDF</a>. Nếu chỉ nhận một tệp, hãy gộp bằng <a href="/vi/merge-pdf">Gộp PDF</a> rồi nén một lần.',
        '<strong>Scan nhẹ ngay từ đầu:</strong> scan hoặc chụp ở độ phân giải vừa đủ đọc thường cho file nhỏ hơn ngay từ đầu.',
        '<strong>Máy dùng chung:</strong> sau khi xong việc, hãy xóa file đã tải và đóng tab trình duyệt.',
      ],
    },
    faqTitle: 'Câu hỏi thường gặp',
    faq: [
      {
        q: 'Nén xong, chữ trong PDF còn chọn và sao chép được không?',
        a: 'Với file có sẵn văn bản, nén thông thường vẫn giữ văn bản, liên kết và biểu mẫu hoạt động. File scan chỉ có ảnh thì vốn không có chữ để chọn. Chỉ khi bạn bật Rasterize cùng Ghi đè bảo vệ nội dung thì trang mới bị dựng thành ảnh và chữ không còn chọn được.',
      },
      {
        q: 'File của tôi có bị tải lên máy chủ không?',
        a: 'Không. Tệp được xử lý ngay trong trình duyệt trên thiết bị của bạn. Ở lần dùng đầu tiên, trang có thể tải thêm bộ xử lý (WebAssembly) của công cụ, nhưng đó là phần mềm xử lý chứ không phải tệp của bạn.',
      },
      {
        q: 'Đã đặt mục tiêu mà file vẫn chưa đạt thì làm sao?',
        a: 'Công cụ sẽ báo “Chưa đạt mục tiêu”. Hãy thử bước 6 nếu file chỉ gồm ảnh scan, bỏ bớt trang thừa, tách hồ sơ thành nhiều tệp, hoặc scan lại ở độ phân giải thấp hơn rồi nén lại.',
      },
      {
        q: 'File PDF đã ký số có nén được không?',
        a: 'Mặc định công cụ để nguyên file đã ký và báo “PDF đã ký không thay đổi”, vì nén sẽ làm hỏng chữ ký. Nếu bật Ghi đè bảo vệ nội dung thì file được nén nhưng mất chữ ký. Cách an toàn là nén bản chưa ký rồi ký lại.',
      },
      {
        q: 'Có nén được nhiều file cùng lúc không?',
        a: 'Có. Bạn có thể thêm nhiều tệp vào một lần, kết quả được tải về dưới dạng một file zip tên compressed-pdfs.zip.',
      },
    ],
    cta: {
      title: 'Sẵn sàng nén file của bạn?',
      text: 'Mở công cụ Nén PDF, chọn tệp và đặt dung lượng mục tiêu. Tệp được xử lý ngay trên máy của bạn.',
      button: 'Mở công cụ Nén PDF',
    },
    related: {
      title: 'Hướng dẫn và công cụ liên quan',
      guidesTitle: 'Hướng dẫn khác',
      guidesNote:
        'Các hướng dẫn khác đang được biên soạn. Bạn có thể xem toàn bộ hướng dẫn hiện có tại trang danh sách.',
      listingLink: 'Xem tất cả hướng dẫn',
      toolsTitle: 'Công cụ hay dùng cùng',
      tools: [
        { href: '/vi/merge-pdf', label: 'Gộp PDF' },
        { href: '/vi/split-pdf', label: 'Chia PDF' },
        { href: '/vi/delete-pages', label: 'Xóa trang' },
        { href: '/vi/protect-pdf', label: 'Bảo vệ PDF' },
      ],
    },
  },

  en: {
    slug: 'compress-pdf-under-1mb',
    cover: {
      src: `${IMG}cover-en.png`,
      width: 1200,
      height: 630,
      alt: 'Cover image: a 4.4 MB PDF compressed down to 818 KB',
    },
    kicker: 'Compress PDF',
    title: 'How to compress a PDF to under 1 MB for online submissions',
    description:
      'Step-by-step guide to compress a scanned PDF to under 1 MB in your browser for government portals or email, with annotated screenshots, tips and answers to common questions.',
    listingSummary:
      'Shrink a scanned PDF to under 1 MB in your browser for an online application or an email, with annotated screenshots for every step.',
    intro:
      'Did a portal reject your file as too large? This guide shows how to shrink a scanned PDF to under 1 MB with the PDF4Me Compress PDF tool. Everything runs in your browser and your file is not uploaded to a server. You follow 5 main steps, plus 1 optional step for scans that are still too heavy.',
    sections: [
      {
        id: 'why-heavy',
        title: 'Why are scanned PDFs so heavy?',
        html: `
<p>Every page you scan, or photograph with a phone, is really a high-resolution picture packed into a PDF, so even a few pages can reach several megabytes. The sample file in this guide has 5 scanned pages and weighs 4.4 MB. Government portals and mailboxes often accept much smaller files, and every one sets its own limit, so read the requirements of the place you are submitting to before you start.</p>
<p>The Compress PDF tool mainly shrinks a file by recompressing the images inside it, while also merging fonts and stripping dead weight. For files that already contain typed text, the text, links and forms keep working after compression.</p>`,
      },
      {
        id: 'page-to-image',
        title: 'What the “pages to images” option really does',
        kind: 'note',
        html: `
<p>The tool also has a <strong>Rasterize pages to images</strong> option under Custom Settings. When it is on, each page is redrawn as a picture, which suits scans that contain only images. Normally you lose nothing, because a scan has no selectable text to begin with.</p>
<p>If the document has selectable text, the tool skips this option. Only if you also turn on <strong>Override content protection</strong> are the pages redrawn as images, and then the text is no longer selectable. Every kind of compression trades image quality for size, so results differ from file to file. Always open the compressed file and check it before you submit.</p>`,
      },
      {
        id: 'before-you-start',
        title: 'Before you start',
        html: `
<ul>
  <li><strong>Know the limit:</strong> the maximum size per file and the accepted format. Write it down so you can compare after compressing.</li>
  <li><strong>Keep the original:</strong> the tool downloads the result under the same name as your original file, so save it in another folder or rename it to avoid overwriting the original.</li>
  <li><strong>Digitally signed files:</strong> by default the tool leaves them untouched and tells you the signed PDF was not changed, because compressing would break the signature. Compress the unsigned version and sign it afterwards.</li>
  <li><strong>Password-protected files:</strong> you will be asked for the password. The compressed copy has no password, so add one again with <a href="/protect-pdf">Protect PDF</a> if you need it.</li>
</ul>`,
      },
    ],
    stepsTitle: 'Step-by-step: compress a PDF to under 1 MB',
    stepsIntro:
      'The screenshots show the Vietnamese interface: the red ring marks what to use and the magnified inset in the corner makes small text readable. The English interface has the same layout and the labels are given in the text.',
    steps: [
      {
        title: 'Open Compress PDF and choose your file',
        alt: 'The Compress PDF page with the file drop area circled in red',
        caption: 'Step 1: click the drop area or drag your PDF into it.',
        html: `
<p>Open the <a href="/compress-pdf">Compress PDF</a> page. Click the drop area (“Click to select files or drag and drop”) and pick your PDF, or drag the file straight into it. You can add several files at once if you want to compress a whole application set.</p>`,
      },
      {
        title: 'Check the original size',
        alt: 'The file name ho-so-scan-mau.pdf and its size, 4.4 MB, shown under the drop area and circled in red',
        caption:
          'Step 2: the file name and size appear right under the drop area.',
        html: `
<p>Once the file is loaded, its name and size appear under the drop area, for example <em>ho-so-scan-mau.pdf, 4.4 MB</em>. Compare that with the limit to see how much you need to cut. If you picked the wrong file, use the trash icon on the right to remove it. The compression options appear just below.</p>`,
      },
      {
        title: 'Pick a compression level',
        alt: 'The Compression Level field set to the recommended Medium option and circled in red',
        caption: 'Step 3: the default level is Medium (Recommended).',
        html: `
<p>The <strong>Compression Level</strong> field defaults to <strong>Medium (Recommended)</strong>, which is a sensible starting point. You can choose Low (Best Quality), High (Smallest Files) or Lossless (No Quality Loss); Lossless keeps full quality, so it usually saves less. When you set a target size in the next step, the tool looks for the best quality that still fits, so you do not have to guess which level is enough.</p>`,
      },
      {
        title: 'Enter a target file size',
        alt: 'The Target File Size field with 900 typed in and the unit set to KB, circled in red',
        caption: 'Step 4: type 900 and choose KB.',
        html: `
<p>In <strong>Target File Size (Optional)</strong>, type <strong>900</strong> and choose <strong>KB</strong> (or type 0.9 and choose MB). Why not exactly 1000? The tool counts 1 MB as 1,048,576 bytes, while the place you submit to may count 1 MB as 1,000,000 bytes. Leaving a small margin keeps you from being rejected over a few dozen KB.</p>`,
      },
      {
        title: 'Press Compress PDF and read the result',
        alt: 'The Compression Complete dialog reporting the size dropped from 4.4 MB to 818.3 KB, circled in red',
        caption: 'Step 5: the dialog reports the size before and after.',
        html: `
<p>Press <strong>Compress PDF</strong>. The tool works in your browser, downloads the result automatically and shows a dialog. For the sample file it reads: <em>“Compression Complete. File size reduced from 4.4 MB to 818.3 KB (Saved 81.6%). It fits the 900 KB target.”</em> That is the result for the sample only; your file may give a different one. Press OK to close it.</p>
<p>If you added several files, the results download together as a zip named <em>compressed-pdfs.zip</em>. If the dialog says “Target Not Reached”, go on to step 6.</p>`,
      },
      {
        title: 'If needed: turn on Rasterize for a heavy scan',
        optional: true,
        alt: 'The Rasterize section of Custom Settings with the “Rasterize pages to images” checkbox ticked and circled in red',
        caption: 'Step 6 (optional): tick “Rasterize pages to images”.',
        html: `
<p>If the file is still too big and it contains only scanned images, click <strong>Custom Settings</strong>, open the <strong>Rasterize</strong> section and tick <strong>Rasterize pages to images</strong>. The Compression Level field switches to Custom. Below it you can adjust the resolution (150 DPI by default) and the quality (50 by default). Lowering these makes the file lighter but the text less sharp, so try small changes.</p>
<p>Then press <strong>Compress PDF</strong> again as in step 5. Remember the note above: this option is skipped for documents that have selectable text.</p>`,
      },
    ],
    tips: {
      title: 'Tips and notes',
      items: [
        '<strong>Check before you submit:</strong> open the compressed file, scroll through every page and make sure text, stamps and signatures are still readable.',
        '<strong>Rename the file:</strong> the result keeps the name of the original, so rename it to match what the portal asks for.',
        '<strong>Drop spare pages:</strong> blank or unneeded pages add weight. Remove them with <a href="/delete-pages">Delete Pages</a> before compressing.',
        '<strong>Too many papers:</strong> if the portal accepts several files, split the set with <a href="/split-pdf">Split PDF</a>. If it takes only one file, combine them with <a href="/merge-pdf">Merge PDF</a> and compress once.',
        '<strong>Scan lighter in the first place:</strong> scanning or photographing at a resolution that is just readable usually gives a smaller file from the start.',
        '<strong>Shared computers:</strong> when you are done, delete the downloaded file and close the browser tab.',
      ],
    },
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'Can I still select and copy text after compressing?',
        a: 'For a file that already contains text, normal compression keeps text, links and forms working. A scan that holds only images has no selectable text to begin with. Only if you turn on Rasterize together with Override content protection are the pages redrawn as images and the text no longer selectable.',
      },
      {
        q: 'Is my file uploaded to a server?',
        a: 'No. The file is processed in your browser on your own device. The first time you use the tool, the page may download its processing engine (WebAssembly), but that is software, not your file.',
      },
      {
        q: 'What if the file is still above my target?',
        a: 'The tool shows “Target Not Reached”. Try step 6 if the file is only scanned images, remove spare pages, split the set into several files, or scan again at a lower resolution and compress once more.',
      },
      {
        q: 'Can a digitally signed PDF be compressed?',
        a: 'By default the tool leaves a signed file untouched and reports that the signed PDF was not changed, because compressing would break the signature. With Override content protection on, the file is compressed but loses its signatures. The safe way is to compress the unsigned version and sign it again.',
      },
      {
        q: 'Can I compress several files at once?',
        a: 'Yes. Add several files in one go and the results download together as a zip named compressed-pdfs.zip.',
      },
    ],
    cta: {
      title: 'Ready to compress your file?',
      text: 'Open the Compress PDF tool, pick your file and set a target size. Your file is processed on your own device.',
      button: 'Open the Compress PDF tool',
    },
    related: {
      title: 'Related guides and tools',
      guidesTitle: 'More guides',
      guidesNote:
        'More guides are on the way. You can see everything published so far on the guides page.',
      listingLink: 'See all guides',
      toolsTitle: 'Tools often used together',
      tools: [
        { href: '/merge-pdf', label: 'Merge PDF' },
        { href: '/split-pdf', label: 'Split PDF' },
        { href: '/delete-pages', label: 'Delete Pages' },
        { href: '/protect-pdf', label: 'Protect PDF' },
      ],
    },
  },
};
