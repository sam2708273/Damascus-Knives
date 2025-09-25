document.addEventListener('DOMContentLoaded', () => {

    const products = [
        { id: 1, name: "Zenith Blade", steel: "Cryo-Tempered Carbon", description: "Ultra-sharp, perfect balance.", link: "#zenith-link" },
        { id: 2, name: "Aether Edge", steel: "Quantum-Forged Titanium", description: "Lightweight, corrosion-resistant.", link: "#aether-link" },
        { id: 3, name: "Stellar Tanto", steel: "Hyper-Alloy Composite", description: "Extreme durability for tactical use.", link: "#stellar-link" },
        { id: 4, name: "Shadow Cleaver", steel: "Dark Matter Infused", description: "Unrivaled cutting power.", link: "#shadow-link" },
        { id: 5, name: "Glimmer Dagger", steel: "Luminous Damascus", description: "Artisanal finish, collector's item.", link: "#glimmer-link" },
        { id: 6, name: "Titan Shard", steel: "Adamantium Core", description: "Virtually indestructible.", link: "#titan-link" },
    ];

    const productGrid = document.getElementById('product-grid');

    const renderProducts = () => {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <div class="product-image-placeholder">
                    <span class="placeholder-text">Image Coming Soon</span>
                </div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-steel">Steel: ${product.steel}</p>
                <p class="product-description">${product.description}</p>
                <a href="${product.link}" class="buy-now-button">Buy Now</a>
            `;

            productGrid.appendChild(productCard);
        });
    };

    renderProducts();

});