import ProductFilter from "../compoments/productFilter";
import ListProduct from "../compoments/ListProduct";

export function ProductListPage() {
    return (
        <>
            <main className="main-content">
                <div className="container">
                    <div className="shop-layout" style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', marginTop: '20px' }}>
                        <ProductFilter />
                        <ListProduct />
                    </div>
                </div>
            </main>
        </>
    )
}