#include <ex/json5.h>
#include <iostream>

int main() {
  auto x = ex::json5::object({
      {"foo", 123},
      {"bar", ex::json5::array({
                  1,
                  "baz",
                  true,
              })},
  });
  std::cout << x << std::endl;
  auto y = ex::json5::parse5("{foo://this is comment\n[123,'baz'/*trailing comma-->*/,],}");
  std::cout << ex::json5::rule::space_indent<>() << y << std::endl;
  return 0;
}