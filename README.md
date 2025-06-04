# Músico Local

Músico Local is a static website that connects local musicians with event organizers throughout Brazil. The site lists artists by state and city, helping bands and solo performers find new opportunities.

## Project Structure

```
/css        - Stylesheets
/js         - JavaScript files
/fonts      - Font resources
/images     - Generic images used across the site
/social     - Favicons and social sharing images
/musicos    - Profile pages for musicians (currently only PR/Curitiba)
pr          - Additional pages for the Paraná region
```

There are also HTML pages for each Brazilian state such as `sao-paulo-sp.html` or `rio-de-janeiro-rj.html`. The main entry point is `index.html`.

## Running Locally

Because the project is purely static, you only need a web server to preview it. An easy option is [live-server](https://www.npmjs.com/package/live-server):

```bash
npm install -g live-server
live-server
```

This will serve the files on a local web server and open the site in your browser.

## Contribution Guidelines

1. Fork the repository and create a new branch for your feature or fix.
2. Submit a pull request explaining your changes.
3. Keep HTML, CSS and JS code formatted and organized.
4. For large updates, open an issue first to discuss your ideas.

## Useful Links

- [Home Page](index.html)
- [About Us](sobre-nos.html)
- [Artist Registration](cadastro.html)
- [Hire Musicians](contratar-artistas.html)
- State pages such as [São Paulo](sao-paulo-sp.html) or [Paraná](parana-pr.html)

Feel free to explore the project and suggest improvements!
