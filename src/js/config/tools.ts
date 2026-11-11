// This file centralizes the definition of all available tools, organized by category.
const baseCategories = [
  {
    name: 'Popular Tools',
    tools: [
      {
        href: import.meta.env.BASE_URL + 'edit-pdf-text.html',
        name: 'Edit PDF Text',
        icon: 'ph-cursor-text',
        subtitle:
          'Click a paragraph in the page and retype it, with font and style options.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-workflow.html',
        name: 'PDF Workflow Builder',
        icon: 'ph-tree-structure',
        subtitle:
          'Chain several PDF steps together by connecting blocks on a canvas.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-multi-tool.html',
        name: 'PDF Multi Tool',
        icon: 'ph-pencil-ruler',
        subtitle:
          'Merge, split, reorder, rotate, delete and copy pages in one workspace.',
      },
      {
        href: import.meta.env.BASE_URL + 'merge-pdf.html',
        name: 'Merge PDF',
        icon: 'ph-browsers',
        subtitle: 'Join several PDFs into one file, in the order you choose.',
      },
      {
        href: import.meta.env.BASE_URL + 'split-pdf.html',
        name: 'Split PDF',
        icon: 'ph-scissors',
        subtitle: 'Pick the pages you need and save them as a separate PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'compress-pdf.html',
        name: 'Compress PDF',
        icon: 'ph-lightning',
        subtitle:
          'Make a PDF smaller for upload limits, with quality settings you can choose.',
      },
      {
        href: import.meta.env.BASE_URL + 'edit-pdf.html',
        name: 'PDF Editor',
        icon: 'ph-pencil-simple',
        subtitle:
          'Highlight, comment, draw shapes, add images and redact text directly on your PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'jpg-to-pdf.html',
        name: 'JPG to PDF',
        icon: 'ph-file-jpg',
        subtitle: 'Turn one or more JPG photos or scans into a single PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'sign-pdf.html',
        name: 'Sign PDF',
        icon: 'ph-pen-nib',
        subtitle:
          'Sign a PDF with a signature you draw, type, or upload as an image.',
      },
      {
        href: import.meta.env.BASE_URL + 'crop-pdf.html',
        name: 'Crop PDF',
        icon: 'ph-crop',
        subtitle: 'Cut away unwanted margins from your pages.',
      },
      {
        href: import.meta.env.BASE_URL + 'extract-pages.html',
        name: 'Extract Pages',
        icon: 'ph-squares-four',
        subtitle: 'Pick the pages you need and save them as a new PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'organize-pdf.html',
        name: 'Duplicate & Organize',
        icon: 'ph-files',
        subtitle:
          'Copy, move or delete pages to put the document in the order you want.',
      },
      {
        href: import.meta.env.BASE_URL + 'delete-pages.html',
        name: 'Delete Pages',
        icon: 'ph-trash',
        subtitle:
          "Pick the extra pages you don't need and save the PDF without them.",
      },
    ],
  },
  {
    name: 'Edit & Annotate',
    tools: [
      {
        href: import.meta.env.BASE_URL + 'edit-pdf.html',
        name: 'PDF Editor',
        icon: 'ph-pencil-simple',
        subtitle:
          'Highlight, comment, draw shapes, add images and redact text directly on your PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'edit-pdf-text.html',
        name: 'Edit PDF Text',
        icon: 'ph-cursor-text',
        subtitle:
          'Click a paragraph in the page and retype it, with font and style options.',
      },
      {
        href: import.meta.env.BASE_URL + 'bookmark.html',
        name: 'Edit Bookmarks',
        icon: 'ph-bookmark',
        subtitle:
          "Build or fix the table of contents that appears in a PDF reader's sidebar.",
      },
      {
        href: import.meta.env.BASE_URL + 'table-of-contents.html',
        name: 'Table of Contents',
        icon: 'ph-list',
        subtitle:
          'Build a contents page from the bookmarks already in your PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'page-numbers.html',
        name: 'Page Numbers',
        icon: 'ph-list-numbers',
        subtitle: 'Add a page number to every page, placed where you choose.',
      },
      {
        href: import.meta.env.BASE_URL + 'add-page-labels.html',
        name: 'Add Page Labels',
        icon: 'ph-text-aa',
        subtitle:
          'Set page numbering such as Roman numerals, a prefix, or a custom start number.',
      },
      {
        href: import.meta.env.BASE_URL + 'bates-numbering.html',
        name: 'Bates Numbering',
        icon: 'ph-hash',
        subtitle:
          'Stamp running reference numbers on pages, across one file or several.',
      },
      {
        href: import.meta.env.BASE_URL + 'add-watermark.html',
        name: 'Add Watermark',
        icon: 'ph-drop',
        subtitle: 'Put a text or image mark across the pages of your PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'header-footer.html',
        name: 'Header & Footer',
        icon: 'ph-paragraph',
        subtitle: 'Put a line of text at the top or bottom of each page.',
      },
      {
        href: import.meta.env.BASE_URL + 'invert-colors.html',
        name: 'Invert Colors',
        icon: 'ph-circle-half',
        subtitle:
          'Flip the colors of every page, handy for reading a PDF at night.',
      },
      {
        href: import.meta.env.BASE_URL + 'scanner-effect.html',
        name: 'Scanner Effect',
        icon: 'ph-scan',
        subtitle:
          'Give a clean PDF the grainy, slightly tilted look of a paper scan.',
      },
      {
        href: import.meta.env.BASE_URL + 'adjust-colors.html',
        name: 'Adjust Colors',
        icon: 'ph-sliders-horizontal',
        subtitle: 'Change brightness, contrast and saturation of every page.',
      },
      {
        href: import.meta.env.BASE_URL + 'background-color.html',
        name: 'Background Color',
        icon: 'ph-palette',
        subtitle: 'Fill the page background with a color you pick.',
      },
      {
        href: import.meta.env.BASE_URL + 'text-color.html',
        name: 'Change Text Color',
        icon: 'ph-eyedropper',
        subtitle: 'Pick a new color for the text in your PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'sign-pdf.html',
        name: 'Sign PDF',
        icon: 'ph-pen-nib',
        subtitle:
          'Sign a PDF with a signature you draw, type, or upload as an image.',
      },
      {
        href: import.meta.env.BASE_URL + 'add-stamps.html',
        name: 'Add Stamps',
        icon: 'ph-stamp',
        subtitle:
          'Place your own image, such as a seal or logo, on pages as a stamp.',
      },
      {
        href: import.meta.env.BASE_URL + 'remove-annotations.html',
        name: 'Remove Annotations',
        icon: 'ph-eraser',
        subtitle: 'Clear comments, highlights and links from your PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'crop-pdf.html',
        name: 'Crop PDF',
        icon: 'ph-crop',
        subtitle: 'Cut away unwanted margins from your pages.',
      },
      {
        href: import.meta.env.BASE_URL + 'form-filler.html',
        name: 'PDF Form Filler',
        icon: 'ph-pencil-line',
        subtitle:
          'Type into form fields right in your browser, then save the filled PDF. XFA forms work too.',
      },
      {
        href: import.meta.env.BASE_URL + 'form-creator.html',
        name: 'Create PDF Form',
        icon: 'ph-file-plus',
        subtitle: 'Build a fillable PDF form by dragging fields onto the page.',
      },
      {
        href: import.meta.env.BASE_URL + 'remove-blank-pages.html',
        name: 'Remove Blank Pages',
        icon: 'ph-file-minus',
        subtitle: 'Find empty pages and remove them in one go.',
      },
    ],
  },
  {
    name: 'Convert to PDF',
    tools: [
      {
        href: import.meta.env.BASE_URL + 'image-to-pdf.html',
        name: 'Images to PDF',
        icon: 'ph-images',
        subtitle:
          'Turn photos and scans (JPG, PNG, WebP, HEIC and more) into one PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'jpg-to-pdf.html',
        name: 'JPG to PDF',
        icon: 'ph-file-jpg',
        subtitle: 'Turn one or more JPG photos or scans into a single PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'png-to-pdf.html',
        name: 'PNG to PDF',
        icon: 'ph-file-png',
        subtitle: 'Put one or more PNG images into a single PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'webp-to-pdf.html',
        name: 'WebP to PDF',
        icon: 'ph-image',
        subtitle: 'Turn WebP images into a single PDF, one image per page.',
      },
      {
        href: import.meta.env.BASE_URL + 'svg-to-pdf.html',
        name: 'SVG to PDF',
        icon: 'ph-file-svg',
        subtitle: 'Turn one or more SVG graphics into a PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'bmp-to-pdf.html',
        name: 'BMP to PDF',
        icon: 'ph-image',
        subtitle: 'Put one or several BMP images into a PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'heic-to-pdf.html',
        name: 'HEIC to PDF',
        icon: 'ph-device-mobile',
        subtitle: 'Turn iPhone HEIC photos into a PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'tiff-to-pdf.html',
        name: 'TIFF to PDF',
        icon: 'ph-image',
        subtitle: 'Turn TIFF images, including multi-page scans, into a PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'txt-to-pdf.html',
        name: 'Text to PDF',
        icon: 'ph-text-t',
        subtitle: 'Paste or open a .txt file and save it as a PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'markdown-to-pdf.html',
        name: 'Markdown to PDF',
        icon: 'ph-markdown-logo',
        subtitle: 'Type or paste Markdown and save it as a formatted PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'json-to-pdf.html',
        name: 'JSON to PDF',
        icon: 'ph-file-code',
        subtitle: 'Turn a JSON file into a PDF you can share or print.',
      },
      {
        href: import.meta.env.BASE_URL + 'odt-to-pdf.html',
        name: 'ODT to PDF',
        icon: 'ph-file',
        subtitle:
          'Turn OpenDocument text files (.odt) into PDF, several at once if you like.',
      },
      {
        href: import.meta.env.BASE_URL + 'csv-to-pdf.html',
        name: 'CSV to PDF',
        icon: 'ph-file-csv',
        subtitle:
          'Turn CSV tables into PDF. You can add several files at once.',
      },
      {
        href: import.meta.env.BASE_URL + 'rtf-to-pdf.html',
        name: 'RTF to PDF',
        icon: 'ph-file-text',
        subtitle:
          'Save RTF documents as PDF. You can pick several files at once.',
      },
      {
        href: import.meta.env.BASE_URL + 'word-to-pdf.html',
        name: 'Word to PDF',
        icon: 'ph-microsoft-word-logo',
        subtitle:
          'Save Word documents (DOCX, DOC, ODT, RTF) as PDF, several files at a time.',
      },
      {
        href: import.meta.env.BASE_URL + 'excel-to-pdf.html',
        name: 'Excel to PDF',
        icon: 'ph-microsoft-excel-logo',
        subtitle:
          'Turn spreadsheets (XLSX, XLS, ODS, CSV) into PDF, several at once if you like.',
      },
      {
        href: import.meta.env.BASE_URL + 'powerpoint-to-pdf.html',
        name: 'PowerPoint to PDF',
        icon: 'ph-microsoft-powerpoint-logo',
        subtitle:
          'Save PowerPoint slides (PPTX, PPT, ODP) as PDF, several files at a time.',
      },
      {
        href: import.meta.env.BASE_URL + 'xps-to-pdf.html',
        name: 'XPS to PDF',
        icon: 'ph-scan',
        subtitle:
          'Turn XPS or OXPS documents into PDF, several at once if you like.',
      },
      {
        href: import.meta.env.BASE_URL + 'mobi-to-pdf.html',
        name: 'MOBI to PDF',
        icon: 'ph-book-open-text',
        subtitle: 'Make a PDF copy of your MOBI e-books, several at a time.',
      },
      {
        href: import.meta.env.BASE_URL + 'epub-to-pdf.html',
        name: 'EPUB to PDF',
        icon: 'ph-book-open-text',
        subtitle:
          'Save EPUB e-books as PDF. You can pick several files at once.',
      },
      {
        href: import.meta.env.BASE_URL + 'fb2-to-pdf.html',
        name: 'FB2 to PDF',
        icon: 'ph-book-bookmark',
        subtitle: 'Turn FB2 e-books into PDF, several files at a time.',
      },
      {
        href: import.meta.env.BASE_URL + 'cbz-to-pdf.html',
        name: 'CBZ to PDF',
        icon: 'ph-book-open',
        subtitle:
          'Turn comic archives (CBZ or CBR) into a PDF, several at once if you like.',
      },
      {
        href: import.meta.env.BASE_URL + 'wpd-to-pdf.html',
        name: 'WPD to PDF',
        icon: 'ph-file-text',
        subtitle:
          'Open old WordPerfect (WPD) documents as PDF, several at a time.',
      },
      {
        href: import.meta.env.BASE_URL + 'wps-to-pdf.html',
        name: 'WPS to PDF',
        icon: 'ph-file-text',
        subtitle:
          'Save WPS Office documents as PDF. You can pick several files at once.',
      },
      {
        href: import.meta.env.BASE_URL + 'xml-to-pdf.html',
        name: 'XML to PDF',
        icon: 'ph-file-code',
        subtitle:
          'Turn XML files into readable PDF documents, several at a time.',
      },
      {
        href: import.meta.env.BASE_URL + 'pages-to-pdf.html',
        name: 'Pages to PDF',
        icon: 'ph-file-text',
        subtitle:
          'Turn Apple Pages documents into PDF, several at once if you like.',
      },
      {
        href: import.meta.env.BASE_URL + 'odg-to-pdf.html',
        name: 'ODG to PDF',
        icon: 'ph-image',
        subtitle:
          'Export OpenDocument drawings (ODG) as PDF, several at a time.',
      },
      {
        href: import.meta.env.BASE_URL + 'ods-to-pdf.html',
        name: 'ODS to PDF',
        icon: 'ph-table',
        subtitle:
          'Save OpenDocument spreadsheets (ODS) as PDF. Several files at once are fine.',
      },
      {
        href: import.meta.env.BASE_URL + 'odp-to-pdf.html',
        name: 'ODP to PDF',
        icon: 'ph-presentation',
        subtitle:
          'Save OpenDocument presentations (ODP) as PDF, several files at a time.',
      },
      {
        href: import.meta.env.BASE_URL + 'pub-to-pdf.html',
        name: 'PUB to PDF',
        icon: 'ph-book-open',
        subtitle:
          'Turn Microsoft Publisher files (.pub) into PDF, several at once if you like.',
      },
      {
        href: import.meta.env.BASE_URL + 'vsd-to-pdf.html',
        name: 'VSD to PDF',
        icon: 'ph-git-branch',
        subtitle:
          'Export Visio diagrams (VSD, VSDX) as PDF, several at a time.',
      },
      {
        href: import.meta.env.BASE_URL + 'psd-to-pdf.html',
        name: 'PSD to PDF',
        icon: 'ph-image',
        subtitle:
          'Save Photoshop (PSD) files as PDF. You can pick several files at once.',
      },
      {
        href: import.meta.env.BASE_URL + 'email-to-pdf.html',
        name: 'Email to PDF',
        icon: 'ph-envelope',
        subtitle: 'Save EML and MSG emails, including Outlook exports, as PDF.',
      },
    ],
  },
  {
    name: 'Convert from PDF',
    tools: [
      {
        href: import.meta.env.BASE_URL + 'pdf-to-jpg.html',
        name: 'PDF to JPG',
        icon: 'ph-file-image',
        subtitle: 'Save every page of a PDF as its own JPG image.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-to-png.html',
        name: 'PDF to PNG',
        icon: 'ph-file-image',
        subtitle: 'Save each page of a PDF as its own PNG image.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-to-webp.html',
        name: 'PDF to WebP',
        icon: 'ph-file-image',
        subtitle: 'Save every page of a PDF as a separate WebP image.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-to-bmp.html',
        name: 'PDF to BMP',
        icon: 'ph-file-image',
        subtitle: 'Save every page of a PDF as a separate BMP image.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-to-tiff.html',
        name: 'PDF to TIFF',
        icon: 'ph-file-image',
        subtitle: 'Save every page of a PDF as its own TIFF image.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-to-cbz.html',
        name: 'PDF to CBZ',
        icon: 'ph-book-open',
        subtitle:
          'Pack the pages of a PDF into a CBZ file for comic reader apps.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-to-svg.html',
        name: 'PDF to SVG',
        icon: 'ph-file-code',
        subtitle:
          'Save each PDF page as an SVG vector image that stays sharp when scaled.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-to-csv.html',
        name: 'PDF to CSV',
        icon: 'ph-file-csv',
        subtitle:
          'Pull tables out of a PDF and save them as CSV for a spreadsheet.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-to-excel.html',
        name: 'PDF to Excel',
        icon: 'ph-microsoft-excel-logo',
        subtitle: 'Pull tables out of a PDF into an Excel (XLSX) file.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-to-greyscale.html',
        name: 'PDF to Greyscale',
        icon: 'ph-palette',
        subtitle:
          'Remove the color so the whole document is in shades of grey.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-to-json.html',
        name: 'PDF to JSON',
        icon: 'ph-file-code',
        subtitle: 'Export a PDF as a JSON file.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-to-word.html',
        name: 'PDF to Word',
        icon: 'ph-microsoft-word-logo',
        subtitle: 'Turn a PDF into a Word document you can edit.',
      },
      {
        href: import.meta.env.BASE_URL + 'extract-images.html',
        name: 'Extract Images',
        icon: 'ph-download-simple',
        subtitle: 'Save the images embedded in a PDF as separate files.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-to-markdown.html',
        name: 'PDF to Markdown',
        icon: 'ph-markdown-logo',
        subtitle: 'Extract the text and tables of a PDF into a Markdown file.',
      },
      {
        href: import.meta.env.BASE_URL + 'prepare-pdf-for-ai.html',
        name: 'Prepare PDF for AI',
        icon: 'ph-sparkle',
        subtitle:
          'Export PDF text as structured JSON, ready to feed into AI tools.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-to-text.html',
        name: 'PDF to Text',
        icon: 'ph-text-aa',
        subtitle:
          'Copy the text out of PDFs into plain .txt files, several at a time.',
      },
    ],
  },
  {
    name: 'Organize & Manage',
    tools: [
      {
        href: import.meta.env.BASE_URL + 'ocr-pdf.html',
        name: 'OCR PDF',
        icon: 'ph-barcode',
        subtitle:
          'Recognize text in scanned pages so you can search and copy it.',
      },
      {
        href: import.meta.env.BASE_URL + 'merge-pdf.html',
        name: 'Merge PDF',
        icon: 'ph-browsers',
        subtitle: 'Join several PDFs into one file, in the order you choose.',
      },
      {
        href: import.meta.env.BASE_URL + 'alternate-merge.html',
        name: 'Alternate & Mix Pages',
        icon: 'ph-shuffle',
        subtitle:
          'Combine several PDFs by taking one page from each in turn, such as front and back scans.',
      },
      {
        href: import.meta.env.BASE_URL + 'duplex-collate.html',
        name: 'Duplex Collate',
        icon: 'ph-arrows-vertical',
        subtitle:
          'Fix a double-sided scan where all fronts came first and all backs after.',
      },
      {
        href: import.meta.env.BASE_URL + 'organize-pdf.html',
        name: 'Organize & Duplicate',
        icon: 'ph-files',
        subtitle:
          'Copy, move or delete pages to put the document in the order you want.',
      },
      {
        href: import.meta.env.BASE_URL + 'overlay-pdf.html',
        name: 'PDF Overlay',
        icon: 'ph-stack-simple',
        subtitle: 'Lay the pages of one PDF over or under another PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'add-attachments.html',
        name: 'Add Attachments',
        icon: 'ph-paperclip',
        subtitle: 'Embed extra files inside your PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'extract-attachments.html',
        name: 'Extract Attachments',
        icon: 'ph-download',
        subtitle:
          'Pull out the files attached inside PDFs and download them in one ZIP.',
      },
      {
        href: import.meta.env.BASE_URL + 'edit-attachments.html',
        name: 'Edit Attachments',
        icon: 'ph-paperclip-horizontal',
        subtitle:
          "See the files embedded inside a PDF and remove the ones you don't want.",
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-multi-tool.html',
        name: 'PDF Multi Tool',
        icon: 'ph-pencil-ruler',
        subtitle:
          'Merge, split, reorder, rotate, delete and copy pages in one workspace.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-layers.html',
        name: 'PDF OCG',
        icon: 'ph-stack-simple',
        subtitle:
          'See, show or hide, add and remove the layers (OCG) in a PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'extract-tables.html',
        name: 'Extract Tables',
        icon: 'ph-table',
        subtitle:
          'Pull tables out of a PDF and save them as CSV, JSON, or Markdown.',
      },
      {
        href: import.meta.env.BASE_URL + 'split-pdf.html',
        name: 'Split PDF',
        icon: 'ph-scissors',
        subtitle: 'Pick the pages you need and save them as a separate PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'divide-pages.html',
        name: 'Divide Pages',
        icon: 'ph-columns',
        subtitle:
          'Cut each page into two parts, side by side or top and bottom.',
      },
      {
        href: import.meta.env.BASE_URL + 'extract-pages.html',
        name: 'Extract Pages',
        icon: 'ph-squares-four',
        subtitle: 'Pick the pages you need and save them as a new PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'delete-pages.html',
        name: 'Delete Pages',
        icon: 'ph-trash',
        subtitle:
          "Pick the extra pages you don't need and save the PDF without them.",
      },
      {
        href: import.meta.env.BASE_URL + 'add-blank-page.html',
        name: 'Add Blank Page',
        icon: 'ph-file-plus',
        subtitle: 'Add a blank page at the position you choose.',
      },
      {
        href: import.meta.env.BASE_URL + 'reverse-pages.html',
        name: 'Reverse Pages',
        icon: 'ph-sort-descending',
        subtitle: 'Make the last page first and the first page last.',
      },
      {
        href: import.meta.env.BASE_URL + 'rotate-pdf.html',
        name: 'Rotate PDF',
        icon: 'ph-arrow-clockwise',
        subtitle:
          'Fix upside-down or sideways scanned pages by rotating them 90 degrees at a time.',
      },
      {
        href: import.meta.env.BASE_URL + 'rotate-custom.html',
        name: 'Rotate by Custom Degrees',
        icon: 'ph-arrows-clockwise',
        subtitle: 'Turn pages by an exact angle, not just 90 degrees.',
      },
      {
        href: import.meta.env.BASE_URL + 'n-up-pdf.html',
        name: 'N-Up PDF',
        icon: 'ph-squares-four',
        subtitle: 'Fit several pages onto one sheet, handy for printing.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-booklet.html',
        name: 'PDF Booklet',
        icon: 'ph-book-open',
        subtitle:
          'Reorder pages so a double-sided printout folds into a booklet.',
      },
      {
        href: import.meta.env.BASE_URL + 'combine-single-page.html',
        name: 'Combine to Single Page',
        icon: 'ph-arrows-out-line-vertical',
        subtitle: 'Join all pages into one long page.',
      },
      {
        href: import.meta.env.BASE_URL + 'view-metadata.html',
        name: 'View Metadata',
        icon: 'ph-info',
        subtitle:
          'Look at details stored in a PDF, such as title, author, and dates.',
      },
      {
        href: import.meta.env.BASE_URL + 'edit-metadata.html',
        name: 'Edit Metadata',
        icon: 'ph-file-code',
        subtitle:
          'View and change the title, author, keywords and other document info.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-to-zip.html',
        name: 'PDFs to ZIP',
        icon: 'ph-file-zip',
        subtitle: 'Pack several PDFs into a single ZIP file.',
      },
      {
        href: import.meta.env.BASE_URL + 'compare-pdfs.html',
        name: 'Compare PDFs',
        icon: 'ph-git-diff',
        subtitle: 'Open two PDFs next to each other to spot the differences.',
      },
      {
        href: import.meta.env.BASE_URL + 'posterize-pdf.html',
        name: 'Posterize PDF',
        icon: 'ph-notepad',
        subtitle:
          'Cut one large page into several smaller pages, for example to print a poster on A4.',
      },
    ],
  },
  {
    name: 'Optimize & Repair',
    tools: [
      {
        href: import.meta.env.BASE_URL + 'compress-pdf.html',
        name: 'Compress PDF',
        icon: 'ph-lightning',
        subtitle:
          'Make a PDF smaller for upload limits, with quality settings you can choose.',
      },
      {
        href: import.meta.env.BASE_URL + 'pdf-to-pdfa.html',
        name: 'PDF to PDF/A',
        icon: 'ph-archive',
        subtitle:
          'Convert a PDF to the PDF/A format used for archiving documents.',
      },
      {
        href: import.meta.env.BASE_URL + 'fix-page-size.html',
        name: 'Fix Page Size',
        icon: 'ph-ruler',
        subtitle: 'Make all pages the same paper size, such as A4.',
      },
      {
        href: import.meta.env.BASE_URL + 'linearize-pdf.html',
        name: 'Linearize PDF',
        icon: 'ph-gauge',
        subtitle:
          'Rewrite a PDF so the first page can show while the rest loads.',
      },
      {
        href: import.meta.env.BASE_URL + 'page-dimensions.html',
        name: 'Page Dimensions',
        icon: 'ph-ruler',
        subtitle:
          "See each page's size and orientation, in the unit you prefer.",
      },
      {
        href: import.meta.env.BASE_URL + 'remove-restrictions.html',
        name: 'Remove Restrictions',
        icon: 'ph-link-break',
        subtitle:
          'Lift editing and printing restrictions from a PDF you have the right to modify.',
      },
      {
        href: import.meta.env.BASE_URL + 'repair-pdf.html',
        name: 'Repair PDF',
        icon: 'ph-wrench',
        subtitle: 'Try to rebuild a PDF that will not open or shows errors.',
      },
      {
        href: import.meta.env.BASE_URL + 'rasterize-pdf.html',
        name: 'Rasterize PDF',
        icon: 'ph-image',
        subtitle:
          'Turn every page into an image, which flattens layers and makes the text unselectable.',
      },
      {
        href: import.meta.env.BASE_URL + 'deskew-pdf.html',
        name: 'Deskew PDF',
        icon: 'ph-perspective',
        subtitle:
          'Straighten scanned pages that were fed in at a slight angle.',
      },
      {
        href: import.meta.env.BASE_URL + 'font-to-outline.html',
        name: 'Font to Outline',
        icon: 'ph-text-outdent',
        subtitle:
          'Convert text to vector shapes so it looks the same even if a device lacks the font.',
      },
    ],
  },
  {
    name: 'Secure PDF',
    tools: [
      {
        href: import.meta.env.BASE_URL + 'protect-pdf.html',
        name: 'Protect PDF',
        icon: 'ph-lock',
        subtitle:
          'Set a password so only people who know it can open your PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'sanitize-pdf.html',
        name: 'Sanitize PDF',
        icon: 'ph-broom',
        subtitle:
          'Strip hidden extras such as metadata, comments and scripts before you share a file.',
      },
      {
        href: import.meta.env.BASE_URL + 'unlock-pdf.html',
        name: 'Unlock PDF',
        icon: 'ph-lock-open',
        subtitle:
          'Take the password off a PDF. You need to know the current password.',
      },
      {
        href: import.meta.env.BASE_URL + 'flatten-pdf.html',
        name: 'Flatten PDF',
        icon: 'ph-stack',
        subtitle:
          'Merge form fields and annotations into the page so they can no longer be changed.',
      },
      {
        href: import.meta.env.BASE_URL + 'remove-metadata.html',
        name: 'Remove Metadata',
        icon: 'ph-file-x',
        subtitle:
          'Clear author, title and other hidden properties from your PDF.',
      },
      {
        href: import.meta.env.BASE_URL + 'change-permissions.html',
        name: 'Change Permissions',
        icon: 'ph-shield-check',
        subtitle:
          'Choose what others may do with a PDF, such as printing or copying.',
      },
      {
        href: import.meta.env.BASE_URL + 'digital-sign-pdf.html',
        name: 'Digital Signature',
        icon: 'ph-certificate',
        subtitle:
          'Sign a PDF with your own certificate (.pfx, .p12 or PEM). The key stays in your browser.',
      },
      {
        href: import.meta.env.BASE_URL + 'validate-signature-pdf.html',
        name: 'Validate Signature',
        icon: 'ph-seal-check',
        subtitle:
          'Check who signed a PDF, whether the certificate is valid and whether the file was altered.',
      },
      {
        href: import.meta.env.BASE_URL + 'timestamp-pdf.html',
        name: 'Timestamp PDF',
        icon: 'ph-clock',
        subtitle:
          'Add an RFC 3161 time stamp to show when the file existed. No certificate needed.',
      },
    ],
  },
];

const getToolIdFromHref = (href: string): string => {
  const match = href.match(/\/([^/]+)\.html$/);
  return match?.[1] ?? href;
};

export const categories = baseCategories.map((category) => ({
  ...category,
  tools: category.tools.map((tool) => ({
    ...tool,
    id: getToolIdFromHref(tool.href),
  })),
}));
