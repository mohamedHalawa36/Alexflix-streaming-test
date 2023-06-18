import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import { useSelector } from "react-redux";
import { getAllProducts, searchProduct } from "../api/apiProduct";
import { productListForm } from "../Utils/moviesUtils";

export default function MoviesModule(props) {
  const loader = useSelector((state) => state.loader);

  const { show, setShow, itemSelect, updateMovie } = props;
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [productListSearch, setProductListSearch] = useState([]);
  const [productList, setProductList] = useState([]);


  const handleCategory = (e) => {
    if (e.length >= 0) setSelectedCategories(e);
  };

  const handleInputChange = (value) => {
    if (value)
      searchProduct(value).then((data) => {
        if (data?.message) setProductListSearch(productListForm(data.products));
      });
    else {
      setProductListSearch([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const products = selectedCategories.map((item) => item.value);
    const list = selectedCategories.map((item) => item.list);
    updateMovie(
      {
        _id: itemSelect._id,
        products,
      },
      list
    );
  };
  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    getAllProducts(1).then((data) => {
      if (data?.message) {
        setProductList(productListForm(data.allProducts));
        setProductListSearch(productListForm(data.allProducts));
      }
    });
  }, []);
  useEffect(() => {
    setSelectedCategories(productListForm(itemSelect.products));
  }, [itemSelect]);



  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Movie Name : </b>
            {itemSelect.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="product">
              <Form.Label>Products</Form.Label>
              <Select
                isMulti
                name="category"
                defaultValue={productListForm(itemSelect?.products)}
                options={productList}
                className="text-dark "
                onChange={handleCategory}
                onBlur={handleCategory}
                onInputChange={handleInputChange}
              />
            </Form.Group>

            <div className="d-flex justify-content-between py-3">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary">
                {loader ? "Update" : "Waiting......"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
