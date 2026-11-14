import '../styles/product-list.css';
export default function  ProductFilter(){
    return (
        <>
            <aside className="shop-sidebar">
                <div className="filter-group">
                    <h3>Danh mục giày</h3>
                    <ul>
                        <li><label><input type="checkbox" /> Giày Sneaker</label></li>
                        <li><label><input type="checkbox" /> Giày Chạy Bộ (Running)</label></li>
                        <li><label><input type="checkbox" /> Giày Bóng Rổ</label></li>
                        <li><label><input type="checkbox" /> Giày Thời Trang / Casual</label></li>
                        <li><label><input type="checkbox" /> Giày Đá Bóng</label></li>
                    </ul>
                </div>
                <div className="filter-group">
                    <h3>Thương hiệu</h3>
                    <ul>
                        <li><label><input type="checkbox" /> Nike</label></li>
                        <li><label><input type="checkbox" /> Adidas</label></li>
                        <li><label><input type="checkbox" /> Jordan</label></li>
                        <li><label><input type="checkbox" /> Converse</label></li>
                        <li><label><input type="checkbox" /> Puma</label></li>
                    </ul>
                </div>
                <div className="filter-group">
                    <h3>Khoảng giá</h3>
                    <ul>
                        <li><label><input type="radio" name="price" /> Dưới 1 triệu</label></li>
                        <li><label><input type="radio" name="price" /> 1 - 3 triệu</label></li>
                        <li><label><input type="radio" name="price" /> Trên 3 triệu</label></li>
                    </ul>
                </div>
                <div className="filter-group">
                    <h3>Kích thước (Size)</h3>
                    <ul className="size-grid" style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                        <li><label><input type="checkbox" /> 38</label></li>
                        <li><label><input type="checkbox" /> 39</label></li>
                        <li><label><input type="checkbox" /> 40</label></li>
                        <li><label><input type="checkbox" /> 41</label></li>
                        <li><label><input type="checkbox" /> 42</label></li>
                    </ul>
                </div>
            </aside>
        </>
    )

}