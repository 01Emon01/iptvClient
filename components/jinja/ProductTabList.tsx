"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiStarFill } from "react-icons/pi";
import Image from "next/image";

export default function ProductTabList({ desc }: { desc: string }) {
  // const [productTab, setProductTab] = useState<boolean>(false);
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="mk-zClass-product-bottomLayer overflow-hidden">
          <div className="product-details-menu-title text-center">
            <ul className="product-details-menu" role="tablist">
              <li
                className={`product-details-menu-item active`}
                role="presentation"
                // onClick={() => setProductTab(false)}
              >
                Description
              </li>
              {/* <li
                className={`product-details-menu-item ${
                  productTab ? "active" : ""
                }`}
                role="presentation"
                onClick={() => setProductTab(true)}
              >
                Reviews
              </li> */}
            </ul>
          </div>
          <div className="product-details-tab-content">
            {/* {productTab ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key="reviews"
                  className="product-details-tab-pane"
                  role="tabpanel"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="tab-review">
                    <div className="flex flex-wrap gap-12 lg:flex-nowrap">
                      <div className="tab-rating-wrap lg:border-r lg:border-gray-200">
                        <div className="rating-percent">
                          <div className="rate-percent">
                            4.8 <span className="text-gray-400">/5</span>
                          </div>
                          <ul className="rate-star-list justify-center">
                            <li>
                              <PiStarFill size={16} />
                            </li>
                            <li>
                              <PiStarFill size={16} />
                            </li>
                            <li>
                              <PiStarFill size={16} />
                            </li>
                            <li>
                              <PiStarFill size={16} />
                            </li>
                            <li className="star-gray">
                              <PiStarFill size={16} />
                            </li>
                          </ul>
                          <p className="text-sm text-gray-500 font-medium text-center">
                            218 Ratings
                          </p>
                        </div>
                        <ul className="rating-progress-list">
                          <li>
                            <p className="star-number">
                              <span className="text-gray-600">5</span>
                              <PiStarFill
                                size={16}
                                className="text-amber-400 mb-0.5"
                              />
                            </p>
                            <div className="rating-progress">
                              <div className="progress" role="progressbar">
                                <div
                                  className="progress-bar"
                                  style={{ width: "100%" }}
                                ></div>
                              </div>
                            </div>
                            <p className="review-count text-sm font-medium text-gray-600">
                              96
                            </p>
                          </li>
                          <li>
                            <p className="star-number">
                              <span className="text-gray-600">4</span>
                              <PiStarFill
                                size={16}
                                className="text-amber-400 mb-0.5"
                              />
                            </p>
                            <div className="rating-progress">
                              <div className="progress" role="progressbar">
                                <div
                                  className="progress-bar"
                                  style={{ width: "75%" }}
                                ></div>
                              </div>
                            </div>
                            <p className="review-count text-sm font-medium text-gray-600">
                              83
                            </p>
                          </li>
                          <li>
                            <p className="star-number">
                              <span className="text-gray-600">3</span>
                              <PiStarFill
                                size={16}
                                className="text-amber-400 mb-0.5"
                              />
                            </p>
                            <div className="rating-progress">
                              <div className="progress" role="progressbar">
                                <div
                                  className="progress-bar"
                                  style={{ width: "52%" }}
                                ></div>
                              </div>
                            </div>
                            <p className="review-count text-sm font-medium text-gray-600">
                              48
                            </p>
                          </li>
                          <li>
                            <p className="star-number">
                              <span className="text-gray-600">2</span>
                              <PiStarFill
                                size={16}
                                className="text-amber-400 mb-0.5"
                              />
                            </p>
                            <div className="rating-progress">
                              <div className="progress" role="progressbar">
                                <div
                                  className="progress-bar"
                                  style={{ width: "30%" }}
                                ></div>
                              </div>
                            </div>
                            <p className="review-count text-sm font-medium text-gray-600">
                              32
                            </p>
                          </li>
                          <li>
                            <p className="star-number">
                              <span className="text-gray-600">1</span>
                              <PiStarFill
                                size={16}
                                className="text-amber-400 mb-0.5"
                              />
                            </p>
                            <div className="rating-progress">
                              <div className="progress" role="progressbar">
                                <div
                                  className="progress-bar"
                                  style={{ width: "5%" }}
                                ></div>
                              </div>
                            </div>
                            <p className="review-count text-sm font-medium text-gray-600">
                              7
                            </p>
                          </li>
                        </ul>
                        <div className="add-comment-wrapper">
                          <h5 className="text-2xl font-semibold text-gray-800 mb-5">
                            Add your comment
                          </h5>
                          <div>
                            <form className="add-comment-form">
                              <fieldset className="rate">
                                <label>Rating:</label>
                                <ul className="rate-star-list justify-start">
                                  <li>
                                    <PiStarFill size={16} />
                                  </li>
                                  <li>
                                    <PiStarFill size={16} />
                                  </li>
                                  <li>
                                    <PiStarFill size={16} />
                                  </li>
                                  <li>
                                    <PiStarFill size={16} />
                                  </li>
                                  <li className="star-gray">
                                    <PiStarFill size={16} />
                                  </li>
                                </ul>
                              </fieldset>
                              <fieldset>
                                <label htmlFor="name">Name:</label>
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  placeholder="Your Name"
                                />
                              </fieldset>
                              <fieldset className="sm:items-start!">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                  name="message"
                                  id="message"
                                  placeholder="Message"
                                ></textarea>
                              </fieldset>
                              <div className="btn-submit">
                                <button
                                  type="submit"
                                  className="add-review-btn text-white"
                                >
                                  Add Review
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="tab-review-wrap">
                        <ul className="review-list">
                          <li className="box-review">
                            <div className="avt">
                              <Image
                                src={"/avatar.webp"}
                                height={100}
                                width={100}
                                priority={false}
                                alt="avatar"
                              />
                            </div>
                            <div className="review-content">
                              <div className="author-wrap">
                                <h6 className="text-gray-800 font-semibold text-xl">
                                  Emon
                                </h6>
                                <div className="text-[13px] font-semibold text-gray-500 mb-1">
                                  Verified User
                                </div>
                                <ul className="rate-star-list">
                                  <li>
                                    <PiStarFill size={16} />
                                  </li>
                                  <li>
                                    <PiStarFill size={16} />
                                  </li>
                                  <li>
                                    <PiStarFill size={16} />
                                  </li>
                                  <li>
                                    <PiStarFill size={16} />
                                  </li>
                                  <li className="star-gray">
                                    <PiStarFill size={16} />
                                  </li>
                                </ul>
                              </div>
                              <p className="text-gray-700">
                                Bought this nice little electric hot water
                                kettle for an overnight date. She enjoyed tea
                                and the hotel did not offer tea in the room.
                                Problem solved! This kettle did its job, through
                                the evening and into the morning we enjoyed many
                                cups of nice, loose leaf tea. Too bad she ended
                                up not liking me and eventually ghosted me. But,
                                the tea was great thanks to this electric
                                kettle. Highly recommend!
                              </p>
                              <div className="review-date text-gray-700 text-sm">
                                02/8/2025
                              </div>
                            </div>
                          </li>
                          <li className="box-review">
                            <div className="avt">
                              <Image
                                src={"/avatar.webp"}
                                height={100}
                                width={100}
                                priority={false}
                                alt="avatar"
                              />
                            </div>
                            <div className="review-content">
                              <div className="author-wrap">
                                <h6 className="text-gray-800 font-semibold text-xl">
                                  Shahin
                                </h6>
                                <div className="text-[13px] font-semibold text-gray-500 mb-1">
                                  Verified User
                                </div>
                                <ul className="rate-star-list">
                                  <li>
                                    <PiStarFill size={16} />
                                  </li>
                                  <li>
                                    <PiStarFill size={16} />
                                  </li>
                                  <li>
                                    <PiStarFill size={16} />
                                  </li>
                                  <li>
                                    <PiStarFill size={16} />
                                  </li>
                                  <li className="star-gray">
                                    <PiStarFill size={16} />
                                  </li>
                                </ul>
                              </div>
                              <p className="text-gray-700">
                                Bought this nice little electric hot water
                                kettle for an overnight date. She enjoyed tea
                                and the hotel did not offer tea in the room.
                                Problem solved! This kettle did its job, through
                                the evening and into the morning we enjoyed many
                                cups of nice, loose leaf tea. Too bad she ended
                                up not liking me and eventually ghosted me. But,
                                the tea was great thanks to this electric
                                kettle. Highly recommend!
                              </p>
                              <div className="review-date text-gray-700 text-sm">
                                02/8/2025
                              </div>
                            </div>
                          </li>
                          <li className="box-review">
                            <div className="avt">
                              <Image
                                src={"/avatar.webp"}
                                height={100}
                                width={100}
                                priority={false}
                                alt="avatar"
                              />
                            </div>
                            <div className="review-content">
                              <div className="author-wrap">
                                <h6 className="text-gray-800 font-semibold text-xl">
                                  Xz
                                </h6>
                                <div className="text-[13px] font-semibold text-gray-500 mb-1">
                                  Verified User
                                </div>
                                <ul className="rate-star-list">
                                  <li>
                                    <PiStarFill size={16} />
                                  </li>
                                  <li>
                                    <PiStarFill size={16} />
                                  </li>
                                  <li>
                                    <PiStarFill size={16} />
                                  </li>
                                  <li>
                                    <PiStarFill size={16} />
                                  </li>
                                  <li className="star-gray">
                                    <PiStarFill size={16} />
                                  </li>
                                </ul>
                              </div>
                              <p className="text-gray-700">
                                Bought this nice little electric hot water
                                kettle for an overnight date. She enjoyed tea
                                and the hotel did not offer tea in the room.
                                Problem solved! This kettle did its job, through
                                the evening and into the morning we enjoyed many
                                cups of nice, loose leaf tea. Too bad she ended
                                up not liking me and eventually ghosted me. But,
                                the tea was great thanks to this electric
                                kettle. Highly recommend!
                              </p>
                              <div className="review-date text-gray-700 text-sm">
                                02/8/2025
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key="description"
                  className="product-details-tab-pane"
                  role="tabpanel"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="tab-description">
                    <p className="text-[15px] text-gray-600 font-medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec tristique nisi id leo mollis egestas. Ut ac ante
                      tincidunt dolor viverra vestibulum. Fusce eget pharetra
                      lorem. Pellentesque ac feugiat nisi. Nulla sollicitudin
                      cursus neque, dapibus aliquet nulla congue congue. In eget
                      sagittis metus, nec semper tortor. Etiam in nunc dui. Sed
                      nibh ante, maximus eu commodo ac, mattis quis elit.
                      Maecenas cursus libero et risus sollicitudin mollis. Sed
                      ultricies sagittis sem, vel iaculis sapien dapibus non.
                      Vivamus facilisis, diam et condimentum sagittis, lectus
                      enim iaculis ipsum, eu finibus urna tellus sit amet ex.
                      Aliquam eget rhoncus lorem. Duis ut metus eget sapien
                      lobortis varius id vel arcu. Sed hendrerit, arcu eget
                      ullamcorper efficitur, enim magna tempus erat, id pretium
                      libero ligula vitae tortor. Aliquam vehicula eleifend sem
                      nec maximus. Aenean ultricies ipsum et laoreet tincidunt.
                    </p>
                    <p className="text-[15px] text-gray-600 font-medium">
                      Morbi interdum purus id justo pellentesque feugiat. Sed
                      malesuada facilisis enim, volutpat ultrices nulla commodo
                      ut. Proin pulvinar pharetra lacinia. Nulla massa massa,
                      elementum vel gravida nec, fermentum vel risus. Cras eu
                      ipsum id metus sollicitudin scelerisque. Maecenas libero
                      dui, faucibus vel pharetra non, eleifend sit amet felis.
                      Etiam metus nibh, auctor non orci in, consectetur pretium
                      enim
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            )} */}
            <AnimatePresence mode="wait">
              <motion.div
                key="description"
                className="product-details-tab-pane"
                role="tabpanel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="tab-description">
                  <div className="product-desc">
                    <div
                      dangerouslySetInnerHTML={{ __html: desc }}
                      className="text-[15px] text-gray-600 font-medium"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
