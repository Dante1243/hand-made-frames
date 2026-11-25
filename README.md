# Hand Made Frames: website rebuild mockup

> **Pitch points below were written when the site was built and most haven't been rechecked.** **Lead status: not interested (called 24 Nov 2026).** Check each one on the live site, on a real phone, before saying it.

Mockup redesign of http://handmadeframes.com.au for **Hand Made Frames**, the picture framing workshop run by Mick Howarth.

- Workshop: 5/13 James Street, Fremantle WA 6160
- Mobile: 0401 028 611
- Phone: (08) 6468 0330
- Email: mickhowarth@gmail.com

Plain HTML, CSS and a little JavaScript, with no framework and no build step. Open `index.html` in a browser to view it.

## Pages

| File | Page | Old site equivalent |
|---|---|---|
| `index.html` | Home: logo hero, address, hours and phone bar, service cards, recent work strip, about Mick teaser, visit call-to-action | `/` |
| `services.html` | Services: bespoke framing, conservation, restoration, architectural gilding, "we also offer" list | `/services.html` |
| `about.html` | About Us: Mick Howarth's background | `/about-us.html` |
| `gallery.html` | Photos: all 60 of their photos in a masonry grid with a tap-to-enlarge lightbox (swipe and arrow keys work) | `/photos.html` |
| `location.html` | Location: directions, hours, their own Google Maps embed and an "Open in Google Maps" button | `/location.html` |
| `contact.html` | Contact Us: tap-to-call and email links, hours, enquiry form | `/contact.html` |

Shared files: `css/style.css`, `js/main.js` (theme toggle, mobile menu, scroll effects, lightbox, enquiry form, footer year).

**Polish features:** dark mode (follows the phone or computer setting, with a sun/moon toggle that remembers the choice and no flash on load), sections, cards and gallery photos that fade up as you scroll, smooth hover effects and a gentle zoom on photos, a mobile menu that fades in, a lightbox that fades and zooms (swipe and arrow keys work), a header that gets a soft shadow and blur when you scroll, a back-to-top button, lazy-loaded gallery photos, clear keyboard focus outlines, and all motion turned off for people who set "reduce motion" on their device.

## What changed compared with the old site (sales pitch points)

- **Works on phones.** The old site is a fixed 1175px-wide layout, so on a phone you have to pinch and zoom. The new one adjusts to phone, tablet and desktop, with no sideways scrolling.
- **Tap to call.** A fixed "Call Mick" and "Find us" bar sits at the bottom of every page on phones, and every phone number and the email address can be tapped. On the old site they are plain text.
- **Proper menu on mobile.** A hamburger menu replaces the old sidebar links.
- **The work gets the space.** The old Photos page is 60 full-size images stacked in one long column (about 8 MB loaded at once). The new gallery is a grid of small thumbnails that load as you scroll (about 2.3 MB in total), and tapping one opens it full size with next and previous buttons. Photos also appear on the home, services and about pages.
- **Contact form that works.** The old form posts to `contact.php` with no labels or validation. The new form has labelled fields and checks for required ones, and it opens the visitor's email app with the enquiry filled in. It can be switched to a form service later.
- **Modern, secure code.** The old site loads jQuery 1.6.4 (2011) and its fonts over plain `http://`, with no HTTPS. The new site has no jQuery, loads fonts over HTTPS and is ready to host on HTTPS.
- **Easier to find on Google.** Every page has a proper title and meta description. The old pages share one title and have an empty description. Images have alt text, and every page has a mobile viewport tag (the old site has one only on its Location page).
- **Consistent details.** The old site shows two different sets of opening hours and still has an old Jackson Street, North Fremantle address hidden in the home page code. The new site shows one address and one set of hours everywhere.
- **Same brand, refreshed.** It keeps their engraved floral logo, the sage green (`#b7ccc6`) and black-and-white theme, and the Playfair Display and Neuton fonts from the original, with a gilt accent drawn from their gilding work.

## Things to check with Mick on the call

- **Opening hours.** The home page says Monday to Friday 8am–5:30pm and Saturday 10am–3pm. Every other page on the old site says Monday to Friday 9am–5pm and Saturday 10am–4pm. The mockup uses the home page hours, because that page also has the current James Street address. Sunday hours are not listed anywhere, so the mockup leaves them out.
- **Contact form.** Confirm which email the form should send to (the mockup uses mickhowarth@gmail.com from their contact page).

All text is taken from the old site. Nothing has been made up: no testimonials, prices or awards. The Art Gallery of WA and Mick Jagger mentions are from their own About page.

## Where the images came from

All images were downloaded from the business's own website, http://handmadeframes.com.au, on 22 November 2026.

- `images/logo.jpg`: their logo artwork (engraved floral frame with "Hand Made Frames, Picture Framing"), from http://handmadeframes.com.au/images/index-background.png, converted to a compressed JPG (927px wide).
- `images/gallery/work-NN.jpg`: the 60 photos on their Photos page, renamed and kept in the same order. Originals are 928px wide.
- `images/gallery/thumbs/work-NN.jpg`: 480px-wide copies of the same photos, made for the grid and cards.

| File | Original URL |
|---|---|
| `work-01.jpg` | http://handmadeframes.com.au/images/photos/tall/HandMadeFrames-2.jpg |
| `work-02.jpg` | http://handmadeframes.com.au/images/photos/tall/HandMadeFrames-3.jpg |
| `work-03.jpg` | http://handmadeframes.com.au/images/photos/cafe/HandMadeFrames-7.jpg |
| `work-04.jpg` | http://handmadeframes.com.au/images/photos/cafe/HandMadeFrames-8.jpg |
| `work-05.jpg` | http://handmadeframes.com.au/images/photos/gold/HandMadeFrames-9.jpg |
| `work-06.jpg` | http://handmadeframes.com.au/images/photos/gold/HandMadeFrames-12.jpg |
| `work-07.jpg` | http://handmadeframes.com.au/images/photos/gold/HandMadeFrames-10.jpg |
| `work-08.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_2496.jpg |
| `work-09.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_2499.jpg |
| `work-10.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_0837.jpg |
| `work-11.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_0841.jpg |
| `work-12.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_0848.jpg |
| `work-13.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_0865.jpg |
| `work-14.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_0881.jpg |
| `work-15.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_0884.jpg |
| `work-16.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_0887.jpg |
| `work-17.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_1617.jpg |
| `work-18.jpg` | http://handmadeframes.com.au/images/photos/flower/f1000014.jpg |
| `work-19.jpg` | http://handmadeframes.com.au/images/photos/flower/f1000016.jpg |
| `work-20.jpg` | http://handmadeframes.com.au/images/photos/flower/f1000001.jpg |
| `work-21.jpg` | http://handmadeframes.com.au/images/photos/flower/f1000003.jpg |
| `work-22.jpg` | http://handmadeframes.com.au/images/photos/flower/f1000007.jpg |
| `work-23.jpg` | http://handmadeframes.com.au/images/photos/flower/f1000008.jpg |
| `work-24.jpg` | http://handmadeframes.com.au/images/photos/misc/HandMadeFrames-5.jpg |
| `work-25.jpg` | http://handmadeframes.com.au/images/photos/misc/HandMadeFrames-6.jpg |
| `work-26.jpg` | http://handmadeframes.com.au/images/photos/misc/HandMadeFrames-4.jpg |
| `work-27.jpg` | http://handmadeframes.com.au/images/photos/misc/IMG_0555.JPG |
| `work-28.jpg` | http://handmadeframes.com.au/images/photos/misc/IMG_0574.JPG |
| `work-29.jpg` | http://handmadeframes.com.au/images/photos/march/727_017.jpg |
| `work-30.jpg` | http://handmadeframes.com.au/images/photos/march/727_018.jpg |
| `work-31.jpg` | http://handmadeframes.com.au/images/photos/march/F1000009.jpg |
| `work-32.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_0563.jpg |
| `work-33.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_0560.jpg |
| `work-34.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_0564.jpg |
| `work-35.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_0566.jpg |
| `work-36.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_0568.jpg |
| `work-37.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_0586.jpg |
| `work-38.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_0614.jpg |
| `work-39.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_0615.jpg |
| `work-40.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_4539.jpg |
| `work-41.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_4545.jpg |
| `work-42.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_1613.jpg |
| `work-43.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_1925.jpg |
| `work-44.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_2205.jpg |
| `work-45.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_2247.jpg |
| `work-46.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_2248.jpg |
| `work-47.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_2249.jpg |
| `work-48.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_2251.jpg |
| `work-49.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_2490.jpg |
| `work-50.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_2832.jpg |
| `work-51.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_2396.jpg |
| `work-52.jpg` | http://handmadeframes.com.au/images/photos/mick/Mick_Guilding-1.jpg |
| `work-53.jpg` | http://handmadeframes.com.au/images/photos/mick/Mick_Guilding-4.jpg |
| `work-54.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_2220.jpg |
| `work-55.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_2228.jpg |
| `work-56.jpg` | http://handmadeframes.com.au/images/photos/silver/f1000010.jpg |
| `work-57.jpg` | http://handmadeframes.com.au/images/photos/silver/f1000011.jpg |
| `work-58.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_2877.jpg |
| `work-59.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_2827.jpg |
| `work-60.jpg` | http://handmadeframes.com.au/images/photos/march/IMG_2650.jpg |
